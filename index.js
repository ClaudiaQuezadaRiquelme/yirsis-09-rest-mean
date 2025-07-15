require('dotenv').config();

const express = require('express');
const authRouter = require('./router/auth');
const db = require('./db/config');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Acceso');
// });

// app.use('*', express.static(__dirname + '/public'));

app.use(express.json());

db.then(() => {
    console.log('conexión db');
    
});

app.use('/', express.static(__dirname + '/public'));

app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${process.env.PORT}`);
    
});