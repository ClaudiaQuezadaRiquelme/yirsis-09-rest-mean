const { Router } = require("express");
const { loginUser } = require("../controllers/auth.controller");

const authRouter = Router();

// authRouter.get('/login', (req, res) => { 
//     res.send('auth server');
// });

// authRouter.post('/login', (req, res) => { // se oculta información en la url

//     // verificar los datos y formato específico

//     // buscar el registro en la base de datos

//     // verificar la contraseña


//     res.send('auth server');
// });


authRouter.get('/login', loginUser);


module.exports = authRouter;