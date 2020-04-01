require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

//const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB,
        { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},
        (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});

/*
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});
 */







