const express = require ('express');
const rutas = require('./rutas');

const port = 3000;

const app = express();

rutas(app);

app.listen(port,()=>{
    console.log("La app se está ejecutando en el puerto " + port);
})