const express = require('express');
const router = require('express').Router();

const raizRoute = require('./main');
const newsRoute = require('./noticias');

router.use('',express.json());

router.use('/',raizRoute);
router.use('/noticias',newsRoute);

module.exports = router;