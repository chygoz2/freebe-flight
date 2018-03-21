require('dotenv').load();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const homeController = require('./controllers/home');
const flightsController = require('./controllers/flights');
const airlinesController = require('./controllers/airlines');
const db = require('./config/db');
const getTokenForThirdPartyApiAccess = require('./middlewares/getAuthorizationTokenMiddleware');
const verifyJwtToken = require('./middlewares/verify_user_token');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(verifyJwtToken);
app.use(getTokenForThirdPartyApiAccess);

app.use('/api/flights', flightsController);
app.use('/api/airlines', airlinesController);
app.use('/api', homeController);

app.listen(port);
console.log("App listening on port "+ port);

module.exports = app;