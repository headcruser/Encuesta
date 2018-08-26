'use strict'

const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser')

// settings
app.set('port', process.env.PORT || 3000);

//Config Headers http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.use(morgan('dev'))
app.use(bodyParser.json())

require("./routes/home")(app)
require("./routes/encuesta")(app)

app.listen(app.get('port'), () => {
    console.log('server on port 3000');
})
