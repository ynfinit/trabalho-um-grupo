const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lem = []

exibirMenu()

function exibirMenu(){
    console.log(`
    menu:
    1- Adicionar um lembrete
    2- Adicionar um Prazo
    3- Listar Lembretes Salvos
    4- concluidos
    5- Sair`)
}

rl.question('Digite uma opção ', (opcao) => {
    switch(opcao){
        case '1':
            adicionarLembrete()
        break
        case '2':

        break
        case '3':
            listar()
        break
        case '4':

        break
        case '5':
            rl.close()
        break
        default:
            console.log('Opção Invalida')        
    }
})

function adicionarLembrete(){
    rl.question('Digite um Lembrete', (lembrete) => {
        lem.push(lembrete)
            console.log('Salvo com Sucesso')
                exibirMenu()
    })
}
function listar(){
    if(lem == 0){
        console.log('Não a nenhum lembrete salvo')
        exibirMenu()
    }else{
        console.log(lem)
        exibirMenu()
    }
}