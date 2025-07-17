const { Router } = require("express");
const { loginUser, registerUser } = require("../controllers/auth.controller");
const { check } = require("express-validator");

const authRouter = Router();

authRouter.post(
    '/register', 
    [
        check('email', 'El formato es invalido').isEmail(),
        check('password', 'La contraseña tiene que tener 6 caracteres como mínimo').isLength({min:6}),
        check('username', 'El nombre de usuario es requerido').not().isEmpty()
    ], 
    registerUser
);
authRouter.post(
    '/login',
    [
        check('email', 'El formato es invalido').isEmail(),
        check('password', 'La contraseña tiene que tener 6 caracteres como mínimo').isLength({min:6}),
    ], 
    loginUser
);

module.exports = authRouter;