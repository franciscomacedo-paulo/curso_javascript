"use strict"

//* VAMOS PRATICAR USANDO FUNCOES COM PARAMETRO REST(...)

let valores = [2,3,5,6,7,10] //* Quero soma todos estes valores 
let somar_1 = 0

//* Primeiro vou somar todos os números sem usar uma funcao
for(let n of valores){
    somar_1 += n
}
console.log("A soma de todos os valores é: " + somar_1)
console.log("****************************************")
//* Usando funcao com parametro Rest(...)
function somarValores(...numeros){
    let tanNumeros = numeros.length;
    let s = 0;

    for(let i of numeros){
        s += i
    }
    return "A soma total é: "+ s + " a media aritmetica é: " + s / tanNumeros
}

console.log(somarValores(...valores)) 
