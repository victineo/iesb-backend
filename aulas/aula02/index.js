const readline = require('readline-sync');

const controlador = require('./controlador');

function menu() {
    console.log('1. Criar');
    console.log('2. Listar');
    console.log('3. Buscar');
    console.log('4. Atualizar');
    console.log('5. Remover');
    console.log('6. Sair');
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case '1':
            controlador.criar()
            break;
        case '2':
            controlador.listar();
            break;
        case '3':
            controlador.buscar();
            break;
        case '4':
            controlador.atualizar();
            break;
        case '5':
            controlador.remover();
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