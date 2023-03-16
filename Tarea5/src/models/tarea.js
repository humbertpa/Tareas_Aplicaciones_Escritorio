const {Schema, model}= require('mongoose');
const tareaSchema= new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    status:{type: String, default: 'new'},
    creacion:{type: String}
}); //objeto que genero


module.exports= model('tareas', tareaSchema);



