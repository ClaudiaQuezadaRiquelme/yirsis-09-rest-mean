require('dotenv').config();

const express = require('express');
const authRouter = require('./router/auth');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Acceso');
// });

// app.use('*', express.static(__dirname + '/public'));

app.use('/', express.static(__dirname + '/public'));

app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${process.env.PORT}`);
    
});