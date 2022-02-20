const compression = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const { join } = require('path');
const router = require('./routes');

const app = express();
app.set('port', process.env.PORT || 8080);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
