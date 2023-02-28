const express = require('express');
const router = require('express').Router();

const contactRoutes = require('./contacto');
const fotosRoutes = require('./fotos');
const hobbiesRoutes = require('./hobbies');
const mainRoute = require('./main');
const noPageRoute = require('./noPagina');
const indiceRoute = require('./indice');

router.use('',express.json());

router.use('/contacto',contactRoutes);
router.use('/fotos',fotosRoutes);
router.use('/hobbies',hobbiesRoutes);
router.use('/main',mainRoute);
router.use('/noPagina',noPageRoute);
router.use('/indice',indiceRoute);

module.exports = router;