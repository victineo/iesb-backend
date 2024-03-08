const express = require('express');

const app = express();

// middleware integrado
app.use(express.json());

// middleware de app
app.use(function(req, resp, next) {
    console.log('Data: ', new Date());
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.body);
    next();
});

// middleware de rota
app.get('/', function(req, resp) {
    resp.send('Olá'); // status 200
});

app.post('/', function(req, resp) {
    console.log(req.body);
    resp.status(201).send('Criado com sucesso'); // 201
});

app.put('/', function(req, resp) {
    resp.json({status: '200', message: 'Sucesso'});
});

app.delete('/', function(req, resp) {
    throw new Exception();
});

// middleware de erro
app.use(function(error, req, resp, next) {
    resp.status(400).send('Deu ruim!')
})

app.listen(3000, function() {
    console.log('A API está ON!');
});

module.exports = app;