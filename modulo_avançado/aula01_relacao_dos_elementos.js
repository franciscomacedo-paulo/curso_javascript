const div_pai = document.querySelector('.container')
const cursos = document.querySelectorAll('.item')
const corpo = document.querySelector('body')

console.log(div_pai.children) // Propriedade pra ver todos os filhos de um elemento em especifico

console.log(div_pai.firstElementChild)
console.log(div_pai.lastElementChild)
console.log(corpo.children)

// Verificando se um elemento tem filhos
console.log(div_pai.hasChildNodes())

let verificar  = cursos[0].hasChildNodes ? "possui filho" : "nao possui filho"
console.log(verificar)

//Verificando o pai do elemento em uma posicao especifica

console.log(cursos[0].parentElement.parentElement.parentElement) //aqui estou a pegar ate o bisavo

// Mostrando o irmao anterior de CSS
console.log(cursos[1].previousElementSibling)
