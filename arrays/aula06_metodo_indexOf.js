const valores = [10,20,30,40,5,10,20,5]
const indexValue = valores.indexOf(20) // Pesquia começando do inicio até encontrar o elemento
console.log(indexValue)

console.log('---------------------------')
const index = valores.indexOf(20, 2) //Pesquisa o elemento 20, mais começa a pesquisar a partir da posicao 2
console.log(index)

console.log('---------------------------')
console.log('Pesquisando com index negativo')
const index2 = valores.indexOf(20, -8) //Pesquisando da direita para esquerda
console.log(index2)

let result = []
let idx;
let fromIdex = 0

do{
    idx = valores.indexOf(20, fromIdex)
    console.log(idx)

    if( idx !== -1){
        result.push(idx)
        fromIdex = idx + 1
    }
}while(idx !== -1)
console.log({result})
