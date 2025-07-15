require('dotenv').config();

const MONGODBPASS = process.env.MDBPASS;
const MONGODBUSER = process.env.MDBUSER;

const mongoose = require('mongoose');

const dbConexion = async () => {
    try {
        await mongoose.connect('mongodb+srv://'+MONGODBUSER+':'+MONGODBPASS+'@cluster.djnuaq8.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster');
        console.log('Conexión DB exitosa');
    } catch (error) {
        console.log('Error conexión');
        
    }
}


module.exports = dbConexion;