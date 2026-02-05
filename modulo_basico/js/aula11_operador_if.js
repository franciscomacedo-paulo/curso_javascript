let nome = "Mariana"
let num = 12
let logico  = false
let frutas = ['kiwi','manga','abacate']

if((typeof(nome) === 'string' && typeof(num) === 'number') && (typeof(logico) === 'boolean' && typeof(frutas) === 'object')){
    console.log("Todos os tipos correspondem devidamente")
}else{
    console.log("Os tipos não combinam!")
}