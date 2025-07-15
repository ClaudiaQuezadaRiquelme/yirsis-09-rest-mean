require('dotenv').config();

const MONGODBPASS = process.env.MDBPASS;
const MONGODBUSER = process.env.MDBUSER;

const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://'+MONGODBUSER+':'+MONGODBPASS+'@cluster.djnuaq8.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster');


module.exports = db;