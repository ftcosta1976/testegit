const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req,res) => {
    res.status(200).send({message: 'Olá mundo estou funcionando!'});
})

app.get('/Ola', (req,res) => {
    res.status(200).send({message: 'Oi, eu sou a rota Olá!!'});
})

app.listen(3001, () => {
    console.log('Api rodando na porta 3001');
})
