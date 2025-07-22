const { request } = require('express');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = request.header('x-auth-token');
    if (!token) {
        return res.status(401).json({
        ok: false,
        msg: "token inválido."
    });
    }
    const { id } = jwt.verify(token, process.env.SECRETWORD);
}


module.exports = verifyToken;