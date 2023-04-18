const {Schema,model} = require('mongoose');

const tokenSchema = newSchema({
    token: {type : String},
    userId: {type : String}
});

module.exports = model('sesiones',tokenSchema);