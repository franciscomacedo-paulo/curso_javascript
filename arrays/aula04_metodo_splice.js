const cores = ['vermelho','azul','verde','amarelo','castanho','violeta','cinza','rosa']
const elApagados = cores.splice(0, 3)
console.log(`Novo array com os elementos apagados`)
console.log({cores})
console.log(`Elemento que foram apagados do arry `)
console.log({elApagados})

console.log('--------------------------------------------')
console.log("INSERINDO ELEMENTOS USANDO O METODO SPLICE()")
console.log('--------------------------------------------')
const animais = ['lobo','cao','urso']
animais.splice(2,0,'raposa','pomba','avestros')
console.log(animais)

console.log('--------------------------------------------')
console.log('TENTADNO DELETAR OS ELEMENTOS DE UM ARRAY VAZIO')
console.log('--------------------------------------------')
const arrVazio = []
const arrVazioDelet = arrVazio.splice(0,3)
console.log(arrVazioDelet)

console.log('--------------------------------------------')
console.log('SUBSTITUINDO UM ELEMENTO COM O METODO SPLICE()')
console.log('--------------------------------------------')
const linguagemPro = ['java','c++','c#','python','go']
linguagemPro.splice(0,2,'javascript','php')
console.log(linguagemPro)

console.log('--------------------------------------------')
console.log('SUBSTITUINDO UM ELEMENTO MAIS COM VARIOS ELEMENTOS')
console.log('--------------------------------------------')
const cursos = ['html','css','java']
console.log(cursos)
cursos.splice(2,1,'javascript','nodejs','threejs','react')
console.log(cursos)
