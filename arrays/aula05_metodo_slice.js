const animais = ['Lobo','Aguia','Leão','Veado','Ovelha','Cabra','Boi']
console.log('Array original')
console.log('_____________________________________')
console.log(animais)

const elExtraido = animais.slice(0, 3)
console.log('Novo arrya vindo do original')
console.log('_____________________________________')
console.log(elExtraido)

console.log('Uma copia do array')
console.log('_____________________________________')
const copyArray = animais.slice()
console.log(copyArray)

console.log('_______________________________________')
console.log('TRANSFORMANDO ELMENTOS EM UM ARRAY')
console.log('_______________________________________')

function toArray(){
    return Array.prototype.slice.call(arguments);
}

let conversao = toArray('A','B','C')
console.log(conversao)

const paragrafos = document.querySelectorAll('p')
const versaoToArry = Array.from(paragrafos) // Segunda forma de conversao
const useSliceToConvert = Array.prototype.slice.call(paragrafos) // Terceira forma de conversao
console.log(versaoToArry)
console.log(useSliceToConvert)
