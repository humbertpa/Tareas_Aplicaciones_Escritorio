const express = require('express');
const rutas = require('./rutas');
const apiRoutes = require('./src/rutas');
const mongoose = require('mongoose');
require('dotenv').config();

const {engine} = require('express-handlebars');