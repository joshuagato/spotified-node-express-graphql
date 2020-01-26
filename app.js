const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const expressStatic = require("express-static-search");

const sequelize = require('./util/sequelizedb');
const graphqlHttp  = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const auth = require('./middleware/auth');


// Initializing express
const app = express();

// Allowing Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if(req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});


// Making the images and artwork folder accessible
app.use('/music', express.static(path.join(__dirname, 'assets', 'music')));
app.use('/artwork', express.static(path.join(__dirname, 'assets', 'artwork')));


// Initializing the auth Middleware
app.use(auth);


// Middleware for setting up the graphql endpoint
app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err) {
        if(!err.originalError) {
          return err;
        }
        console.log(err);
        const data = err.originalError.data;
        const message = err.message || 'An error occurred.';
        const code = err.originalError.code || 500;
        return { message: message, status: code, data: data };
    }
}));


// Middleware for handling errors
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});


// Connecting the mysql database using sequelize
sequelize.sync().then(result => {
    app.listen(4004);
    // console.log(result);
}).catch(err => console.log(err));
