"use strict"

/*
    *NESTA AULA VAMOS FALAR SOBRE O OPERADOR TYPEOF
    *Usado para mostrar o tipo de uma variável, ou seja o tipo primitivo
*/
let numI, numF, str, logico
numI = 10
numF = 5.1
str = "Lurdes"
logico = true


console.log(numI + " é do tipo " + typeof(numI) )
console.log(numF + " é do tipo " + typeof(numF) )
console.log(str + " é do tipo " + typeof(str) )
console.log(logico + " é do tipo " + typeof(logico))

const verif = (typeof(numI) === 'number') ? "Sim é realmente um número" : "Infelizamente não é um número!" 
console.log(verif)
