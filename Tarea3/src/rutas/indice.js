const router = require('express').Router();
const path= require('path');

router.get('',function (req,res) {
    const ruta = path.join(__dirname,'src/views/indice.html');
    res.sendFile(ruta);
})

module.exports=router;