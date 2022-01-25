const express = require('express');
const Formulario = require("./controllers/formularios");

const rotas = express();

rotas.post('/formulario', Formulario.create);
rotas.get('/formulario/', Formulario.list);
rotas.put('/formulario/:id', Formulario.update);
rotas.delete('/formulario/:id', Formulario.delete);


module.exports = rotas;