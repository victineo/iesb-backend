const Contato = require('./modelo.js');

const contatos = [];

function adicionarContato() {
    const novoContato = new Contato ('Victor', 'victor@gmail.com', '12345-6789');
    contatos.push(novoContato);
}

function listarContatos() {
    return contatos;
}

function buscarContato(nome) {
    return contatos.find(contato => contato.nome === nome);
}

function atualizarContato(nome, email, telefone) {
    const contato = buscarContato(nome);
    if (contato) {
        contato.email = email
        contato.telefone = telefone
    }
}

function removerContato(nome) {
    const posicao = contatos.findIndex(contato => contato.nome === nome);
    if (posicao >= 0) {
        contatos.splice(posicao, 1);
    } else {
        console.log('Contato não encontrado.')
    }
}

module.exports = {adicionarContato, listarContatos, buscarContato, atualizarContato};