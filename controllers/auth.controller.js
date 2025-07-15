const loginUser = (req, res) => {
    res.send('Login controller');
}

const registerUser = (req, res) => {
    console.log("registerUser: ", req.body);
    
    const {email, password, username} = req.body; // si recibo más datos dentro del request, con la desestructuración evito guardar datos que no he planificado manejar, así evito problemas de seguridad.
    console.log({email, password, username} );
    
    res.json({ok: true, email, username, password});
}

module.exports = {
    loginUser,
    registerUser,
}