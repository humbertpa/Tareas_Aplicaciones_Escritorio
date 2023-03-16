const router = require('express').Router();
const ControladorTareas = require('./../controllers/tareas');

router.get('',ControladorTareas.listar);
router.get(':id',ControladorTareas.listar);
router.post('', ControladorTareas.ver); 
router.put(':id', ControladorTareas.ver); 
router.delete('/:id',ControladorTareas.eliminar);

module.exports=router;
