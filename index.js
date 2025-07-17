require('dotenv').config();

const express = require('express');
const cors = require('cors');

const authRouter = require('./router/auth');
const dbConexion = require('./db/config');
const app = express();


app.use(express.json());
app.use(cors());
dbConexion();

app.use('/', express.static(__dirname + '/public'));

app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${process.env.PORT}`);
    
});