const express = require('express');

const router = express.Router();

router.get('/produtos', function(req, resp) {
    resp.json([]); // 200 e JSON
});

router.get('/produtos/:produtoId', function(req, resp) {
    if (req.params.produtoId == 1) {
        resp.json({}); // 200 e JSON
    } else {
        resp.status(404).json({msg: 'Produto não encontrado'});
    }
});

router.post('/produtos', function(req, resp) {
    if (req.body && req.body.nome && req.body.preco) {
        resp.status(201).json({});
    } else {
        resp.status(422).json({msg: 'Nome e/ou preço do produto obrigatórios'});
    }
});

router.put("/produtos/:produtoId", function(req,resp) {
    if (req.params.produtoId == 1) {
        resp.json({});
    } else {
        resp.status(404).json({msg: 'Produto não encontrado'});
    }
});

router.delete('/produtos/:produtoId', function(req, resp) {
    if (req.params.produtoId == 1) {
        resp.status(204).end();
    } else {
        resp.status(404).json({msg: 'Produto não encontrado'})
    }
});

module.exports = router;