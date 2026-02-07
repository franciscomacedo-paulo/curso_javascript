/*
    *VAMOS CONTAR DE 1 ATE 10, USANDO O LOOP FOR
*/

for(let i = 1;i < 10;i++){
    console.log(i)
}

// ENCONTRANDO NUMEROS MENORES
console.log("*****************************")
let num_menor = 0
for(let i = 0;i < 20;i++){
    if(i < 10){
        num_menor ++
    }
}
console.log(num_menor)
console.log("*****************************")
//PROCURANDO VALORES PARES E IMPAR
let odd = 0 //valore impares
let even = 0 // valores par

for(let i = 1;i <= 15;i++){
    if(i % 2 === 0){
        even++
    }else{
        odd++
    }
}
console.log("A quantidade de valores par encontrado foi de: " + even)
console.log("A quantidade de valores impar encontrado foi de: "+ odd)

// TESTANDO O USO DE OUTROS FOR 
console.log("*************** FOR IN **************")
let frutas = ['banana','kiwi','uva','abacate']

for(chaves in frutas){
    console.table(chaves)
}

// TESTANDO O USO DO FOR OF
console.log("*************** FOR OF **************")
for(valores of frutas){
    console.log(valores)
}