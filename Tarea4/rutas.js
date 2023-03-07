const express = require('express');
const path = require('path');

module.exports = function (app) {

    app.use('/assets', express.static(path.join(__dirname,'/src/assets')));

/*     app.get('/',function (req,res) {
        const ruta = path.join(__dirname,'src/views/main.html');
        res.sendFile(ruta);
    }) */
}