const router = require("express").Router();
const usersController = require('./../controllers/usuarios')

router.post('/login',usersController.login);
router.post('/registro',usersController)

module.exports = router