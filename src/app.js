require("dotenv").config({
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});

const express = require('express');
const routes = require('./routes');
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app