const { Router } = require("express");

const authRouter = Router();

authRouter.get('/', (req, res) => {
    res.send('auth server');
});



module.exports = authRouter;