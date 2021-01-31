const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const compression = require('compression');
const dotenv = require('dotenv');
dotenv.config(); // permitimos que todas las rutas accedan a las variables de entorno

const {dbConnection} = require("./database/config");
dbConnection();
const products = require('./routes/products');

/*RUTAS*/


const app = express();

app.use(cors()); //middleware: funcion que se interpone entre petición de usuario y ejecución de una tarea 
app.use(compression()); // comprime info de salida
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*RUTAS DE LA APP*/
app.use('/api/products', products)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.error("ruta no encontrada")
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err)
});

module.exports = app;
