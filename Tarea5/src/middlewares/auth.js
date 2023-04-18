const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.PRIVATE_KEY, (err, data) => {
        if (err) {
            res.sendStatus(401);
        } else {
            req.usuario = data;
            next();
        }
    });
}