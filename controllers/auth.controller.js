const bcryptjs = require('bcryptjs');
const userModel = require('../models/usuario');

const loginUser = (req, res) => {
    res.send('Login controller');
}

const registerUser = async (req, res) => {
    console.log("registerUser: ", req.body);
    
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
            res.json({
                ok: true,
                id: newUser.id,
                email, username,
                msg: 'Usuario creado.'
            });
        }
    } catch (error) {
        console.log('Error en el registro de usuario.');
        res.json({
            ok: false,
            msg: 'Error al registrar usuario.'
        });
    }
    console.log({email, password, username} );
    res.json({ok: true, email, username, password});
}

module.exports = {
    loginUser,
    registerUser,
}