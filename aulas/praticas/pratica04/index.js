const express = require('express');

const app = express();

// middleware de rota
app.get('/', function(req, resp) {
    resp.send('Você fez uma requisição GET'); // status 200
});

app.post('/', function(req, resp) {
    console.log(req.body);
    resp.status(201).send('Você fez uma requisição POST'); // 201
});

app.put('/', function(req, resp) {
    resp.json({status: '200', message: 'Você fez uma requisição PUT'});
});

app.delete('/', function(req, resp) {
   resp.status(204).end();
});

app.listen(3000, function() {
    console.log('A API está ON!');
});

module.exports = app;