const jwt = require('jsonwebtoken');
const Usuario = require('./../models/usuario');
const Token = require('./../models/token');

class ControladorUsuarios {
    static listar(req, res) {
        Usuario.find({}).lean().then(usuarios => {
            res.send(usuarios);
        }).catch(err => { res.sendStatus(400) });
    }

    static ver(req, res) {
        res.send('ver el detalle de la tarea' + req.params.id);
    }

    static crear(req, res) {
        res.send('Se creo el usuario correctamente');
    }

    static login(req, res) {
        Usuario.findOne({
            correo: req.body.correo,
            password: jwt.sign({ a: 1 }, req.body.password)
        }).then(response => {
            const data = {
                id: response._id,
                correo: req.body.correo
            };
            const key = process.env.PRIVATE_KEY;
            const token = jwt.sign(data, key);

            Token.create({
                token,
                userId: response._id
            }).then(tokenResponse => {
                res.send({
                    token
                });
            });

        }).catch(err => {
            res.status(400).send();
        })
    }

    static registro(req, res) {
        Usuario.create({
            nombre: req.body.nombre,
            correo: req.body.correo,
            password: jwt.sign({ a: 1 }, req.body.password)
        }).then(() => {
            res.send();
        }).catch((err) => {
            res.status(400).send(err);
        });
    }


}


