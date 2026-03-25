const frutas =['banana','manga','caju','kiwi', 'limão','abacate','uva']
const arrTam = frutas.length
console.log(arrTam)
console.log(Array.isArray(frutas))// true


const removeLastEl = (arrTam > 5)? frutas.pop() : frutas.push('laranja')
console.log(removeLastEl)
console.log(frutas)