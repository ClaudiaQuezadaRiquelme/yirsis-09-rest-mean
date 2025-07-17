require('dotenv').config();

const DB_CONECTION = process.env.DB_CONECTION;

const mongoose = require('mongoose');

const dbConexion = async () => {
    try {
        await mongoose.connect(DB_CONECTION);
        console.log('Conexión DB exitosa');
    } catch (error) {
        console.log('Error conexión: '+error);
    }
}


module.exports = dbConexion;