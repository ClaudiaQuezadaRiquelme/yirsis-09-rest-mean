require('dotenv').config();

const express = require('express');
const cors = require('cors');

const authRouter = require('./router/auth');
const taskRouter = require('./router/tasks');
const dbConexion = require('./db/config');
const app = express();

dbConexion();

app.use(express.json());
app.use(cors());
app.use('/', express.static(__dirname + '/public'));

app.use('/auth', authRouter);
app.use('/task', taskRouter);

app.listen(process.env.PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${process.env.PORT}`);
    
});