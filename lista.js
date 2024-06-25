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
    if (lem.length == 0){
        console.log ('nao tem nenhum lembrete')
        exibirMenu()
    }else{
        console.log('lista de elementos')
        lem.forEach((lem, index) => {
            console(`${index + 1}. nome:${lem.lembrete}`)
        })
    }
        rl.question('digite o numero que deseja editar:', (opcao) =>{
          if (opcao > 0 && opcao <= funcionarios.length){
                rl.question('digite o novo lembrete: ', (lembrete) => {
                    rl.question('digite o novo dia ', (prazo) => {
                        lem[opcao - 1] = {
                            lembrete,
                            prazo,
                        }
                        console.log('editado com sucesso')
                        exibirMenu()
                    })
                })
            } else{
                console.log('numero invalido')
                exibirMenu()
            }
        })
    
}