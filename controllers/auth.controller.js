const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");
const userModel = require('../models/user');

const ENVSECRETWORD = process.env.SECRETWORD;

const registerUser = async (req, res) => {
    console.log("registerUser: ", req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(501).json({
            ok: false,
            msg: errors.mapped()
        });
    }
    
    const {email, password, username} = req.body; // si recibo más datos dentro del request, con la desestructuración evito guardar datos que no he planificado manejar, así evito problemas de seguridad.

    try {
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(501).json({
                ok: false,
                msg: 'Correo ya registrado'
            });
        } else {
            const newUser = new userModel({
                email, password, username
            });
            const salt = bcryptjs.genSaltSync(12);
            newUser.password = bcryptjs.hashSync(password, salt);
            await newUser.save();

            const payload = {
                id: newUser.id,
            }
            jwt.sign(payload, ENVSECRETWORD, {expiresIn: 3600}, (error, token) => { // Tiempo expiresIn 3600 sólo válido para desarrollo
                res.json({
                    ok: true,
                    id: newUser.id,
                    username,
                    token,
                    msg: 'Usuario creado.'
                });
            });            
        }
    } catch (error) {
        console.log('Error en el registro de usuario.:',error);
        res.json({
            ok: false,
            msg: 'Error al registrar usuario.'
        });
    }
    console.log({email, password, username} );
    // res.json({ok: true, email, username, password})
}

const loginUser = async (req, res) => {
    console.log("loginUser: ", req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(501).json({
            ok: false,
            msg: errors.mapped()
        });
    }

    const {email, password} = req.body; 
    try {
        let user = await userModel.findOne({email});

        if (!user) {
            return res.status(401).json({
                ok: true,
                msg: 'Correo o contraseña inválida.'
            });
        } else {
            const passwordValido = bcryptjs.compareSync(password, user.password);
            if (!passwordValido) {
                return res.status(401).json({
                    ok: true,
                    msg: 'Correo o contraseña inválida.'
                });
            }

            const payload = {
                id: user.id,
            }
            jwt.sign(payload, ENVSECRETWORD, {expiresIn: 3600}, (error, token) => { // Tiempo expiresIn 3600 sólo válido para desarrollo
                res.json({
                    ok: true,
                    id: user.id,
                    username: user.username,
                    token,
                    msg: 'Usuario logueado.'
                });
            });            
        }
    } catch (error) {
        console.log('Error en el login de usuario.:',error);
        res.json({
            ok: false,
            msg: 'Error al loguear usuario.'
        });
    }
}

module.exports = {
    loginUser,
    registerUser,
}