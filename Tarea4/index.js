const express = require("express");
const path = require('path');
const rutas = require("./rutas");
const Routes = require('./src/rutas'); //como esa carpeta tiene un index.js, al importar la carpeta importa directamente ese archivo


require('dotenv').config();
const { engine } = require('express-handlebars');

const port = process.env.PORT || 3000
const app = express();

rutas(Routes);
app.use('',Routes);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
app.use('', Routes); // se indica que se usará el middleware que se está importando
rutas(app);


app.get("*", function (req, res) {
    const ruta = path.join(__dirname,'src/views/noPagina.html');
    res.status(404).sendFile(ruta);
    //res.status(404).send("Pagina no encontrada");
})

app.listen(port, () => {
    console.log("app is running in port " + port);
});