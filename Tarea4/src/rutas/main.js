const router = require('express').Router();
const path = require('path');

router.get('',function(req,res){
    //const ruta = path.join(__dirname,'../views/main.html');
    //res.sendFile(ruta);
    const ruta = path.join(__dirname,'../views/layouts/main.handlebars');
    res.render(ruta);
});

module.exports = router;