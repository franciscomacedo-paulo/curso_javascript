//* NESTA AULA VAMOS FALAR DOS OPERADORES BREAK E CONTINUE


//** EXEMPLO USANDO BREAK

let valores  = [10,30,60,80,90,5];
let valor_menor = 40;
let menor_2 = 30
console.log("Valor menor antigo " + valor_menor)

for(n of valores){
    if(n < valor_menor){
        valor_menor = n
        break
    }
}

console.log("Valor menor novo " + valor_menor)

//** EXEMPLO USANDO CONTINUE
console.log("***********************************")

for(i of valores){
    if(i > menor_2){
        continue
    }
    menor_2 = i
}
console.log(menor_2)