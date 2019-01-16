const express = require('express');
const app = express();
const userRoute = require('./api/v1/user');

app.use('/user', userRoute);

module.exports = app;