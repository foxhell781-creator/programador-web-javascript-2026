const fs = require('fs')

console.log('Inicio')
fs.writeFile('arquivo2.txt', 'mensagem do arquivo 2', (erro)=>{
    setTimeout(()=>{
        console.log('Arquivo foi criado')
    }, 3000)
})
console.log('fim')







//fs.writeFileSync('arquivo.txt', 'Esse é o texto :O')
//fs.readFile('arquivo.txt', 'utf-8',(erro, dados)=>{
//    if(erro){
//        console.log(erro)
//    }
//    console.log(dados)
//})










