const express = require('express');
const router = express.Router();
middlewares = require('./../middlewares')

const taskRoutes = require('./tareas');
const usersRoutes = require('./tareas');

router.use('',express.json());


router.use('/tareas',taskRoutes);


module.exports = router;
