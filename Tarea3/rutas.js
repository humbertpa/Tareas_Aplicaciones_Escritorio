const express = require('express');
const path = require('path');

module.exports = function (app) {

    app.use('/assets', express.static(path.join(__dirname,'/src/assets')));

    app.get('/',function (req,res) {
        const ruta = path.join(__dirname,'src/views/index.html');
        res.sendFile(ruta);
    })

    app.get('/main',function (req,res) {
        const ruta = path.join(__dirname,'src/views/main.html');
        res.sendFile(ruta);
    })

    app.get('/fotos',function (req,res) {
        const ruta = path.join(__dirname,'src/views/fotos.html');
        res.sendFile(ruta);
    })

    app.get('/hobbies',function (req,res) {
        const ruta = path.join(__dirname,'src/views/hobbies.html');
        res.sendFile(ruta);
    })
    
    app.get('/contacto',function (req,res) {
        const ruta = path.join(__dirname,'src/views/contacto.html');
        res.sendFile(ruta);
    })

    app.get("*", function (req, res) {
        const ruta = path.join(__dirname,'src/views/noPagina.html');
        res.status(404).sendFile(ruta);
        //res.status(404).send("Pagina no encontrada");
    }
    );
}