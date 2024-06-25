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
    4- editar o lembrete
    5- Sair`)

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
                editar()
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
        rl.question('Digite um prazo', (prazo) => {
            lem.push({lembrete:lembrete, prazo:parseFloat(prazo)})
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
}
function editar(){
    if(lem == 0){
        console.log('Não a nenhum lembrete salvo')
        exibirMenu()
    }else{
        console.log('Listando lembretes')
        lem.forEach((lem, index) => {
            console.log(`${index +1}. ${lem.lembrete}`)
        })
        rl.question('Digite o numero do lembrete que quer editar: ', (editar) => {
            if(editar > 0 && editar <= lem.length){
                rl.question('Digite o novo lembrete: ', (lembrete) => {
                    rl.question('Digite um prazo: ', (prazo) => {
                            lem[editar -1]={
                                lembrete,
                                prazo
                            }
                            console.log('Editado com Sucesso')
                            exibirMenu()

                    })
                })
            }else{
                console.log('Numero Invalido, Tente Novamente')
                editar()
            }
        })
    }
}