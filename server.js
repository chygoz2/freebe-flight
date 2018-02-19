require('dotenv').load();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeController = require('./controllers/home');
const db = require('./config/db');
const getToken = require('./middlewares/getAuthorizationTokenMiddleware');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    getToken()
        .then(token => console.log(token))
        .catch(error => {
            console.log(error)
        });
    next();
});

app.use('/api', homeController);

app.listen(port);
console.log("App listening on port "+ port);