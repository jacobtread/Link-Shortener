
const path = require('path');
const root = path.join(__dirname, '../');

const express = require('express');
const requestLogger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(root, 'resources/views'));
app.set('view engine', 'hbs')
if (process.env.DEBUG_REQUESTS_LOG === 'true') {
    app.use(requestLogger('dev'));
}
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(root, 'public')));

const router = require('./router');
router(app)

module.exports = app;