const letras = ["A","B","C"]
const iterador = letras[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next())
console.log(iterador.next())