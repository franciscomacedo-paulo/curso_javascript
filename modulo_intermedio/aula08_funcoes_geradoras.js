/*
    * NESTA AULA VAMOS FALAR DE FUNCOES GERADORAS
*/

//* Exemplo 1

function* cores(){
    yield 'verde'
    yield 'azul'
    yield 'preto'
}

const itc = cores()
console.log(itc.next().value)

//* Exemplo 2
console.log("_______________________________________\n")
function* perguntas(){
    const nome = yield 'Qual é seu nome?'
    const sport = yield 'Qual seu esporte favorita?'

    return `Seu nome é ${nome} seu esporte favorito é ${sport}`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Paulo').value)
console.log(itp.next('Judo').value)