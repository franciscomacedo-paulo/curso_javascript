// "use strict"

/*
    * OPERADOR SPREAD
    *Este operador é usado para espalhar, os valores de um array, ou elementos, e as vezes é usado para expandir os elementos de um array, que é represetado por (...)
*/
const notas = [10,30,50,20,11,12]
const valores =[50,30,12,30,3,4,5,7]
const novosValores = [...notas]

console.log(notas)
console.log(valores)
console.log(novosValores)

console.log("==================================================")
let num_list_1 = [100,120,230,28,89]
let num_list_2 = [230,45,120,56,68,79]
let num_list_copy = [num_list_1,num_list_2]


console.log("Copiando os valores sem usar o operador Spread ")
console.log("==================================================")
console.log(num_list_copy)

const val_teste = [12,2,4,11,22,45,60,30,17]
const val_vazio = []

for(n of val_teste){
    if(n > 11){
        val_vazio.push(n)
    }
}
console.table(val_vazio)

console.log("==================================================")
const numbers = [1, 2, 3];
const s = Math.sum(numbers)
console.log(s)
