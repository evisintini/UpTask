const express = require ('express');

//crear app de express
const app = express(); //express es la variable de arriba, pero ahora como funcion. Contiene todo lo necesario  de express para crear el servidor

//Ruta para el home
app.use('/', (req, res) =>{
    res.send('Hola')
});

app.listen(3000);

