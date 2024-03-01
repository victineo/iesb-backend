const readline = require('readline-sync');

const contatoControlador = require('./controlador');

function menu() {
    console.log('1. Criar contato');
    console.log('2. Listar contatos');
    console.log('3. Buscar contatos');
    console.log('4. Atualizar contatos');
    console.log('5. Remover contatos');
    console.log('6. Sair');
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case '1':
            readline.question('Nome: ');
            readline.question('Email: ');
            readline.question('Telefone: ');
            break;
        case '2':
            console.log(contatoControlador.listarContatos());
            break;
        case '3':
            controlador.buscarContato();
            break;
        case '4':
            controlador.atualizarContato();
            break;
        case '5':
            controlador.removerContato();
             break;
        case '6': process.exit(0);
        default: console.log('Opção inválida.')
    }
    readline.question('Pressione ENTER para continuar...')
}

function main() {
    while(true) {
        menu();
        const opcao = readline.question('Insira sua escolha: ')
        escolherOpcao(opcao);
    }
}

main();