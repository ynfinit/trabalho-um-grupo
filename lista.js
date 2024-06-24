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
    2- Listar Lembretes Salvos
    3- concluidos
    4- Sair`)

    rl.question('Digite uma opção ', (opcao) => {
        switch(opcao){
            case '1':
                adicionarLembrete()
            break
            case '2':
                listar()    
            break
            case '3':

            break
            case '4':
                rl.close()
            break
            default:
                console.log('Opção Invalida')        
        }
    })


function adicionarLembrete(){
    rl.question('Digite um Lembrete ', (lembrete) => {
        rl.question('Digite um prazo ', (prazo) => {
            lem.push({lembrete:lembrete, prazo:prazo, concluidos:false})
                console.log('Salvo com Sucesso')
            exibirMenu()
        })
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
 
function listarConcluidos(){
    const lemConcluidos = lem.filter(lem => lem.concluidos)
    if(lem == 0){
        console.log('Não a lembretes salvos')
        exibirMenu()
    }else{
        console.log('listando lembretes concluidos')
        lemConcluidos.forEach((lem, index) => {
            console.log(`Lembrete ${index +1}. ${lem.lembrete} Prazo: ${lem.prazo}`)
        })
        exibirMenu()
    }
}

}