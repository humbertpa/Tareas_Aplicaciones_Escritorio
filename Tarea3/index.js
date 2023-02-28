const express = require ('express');
const path = require('path');
const rutas = require('./rutas');
const Routes = require('./src/rutas');

const port = 3000;

const app = express();

rutas(Routes);
app.use('',Routes);

app.get("*", function (req, res) {
    const ruta = path.join(__dirname,'src/views/noPagina.html');
    res.status(404).sendFile(ruta);
    //res.status(404).send("Pagina no encontrada");
})

app.listen(port,()=>{
    console.log("La app se está ejecutando en el puerto " + port);
})