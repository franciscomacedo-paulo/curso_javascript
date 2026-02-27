//* NESTA AULA VAMOS FALAR DO METODO FILTER
const idades = [12,34,54,10,18,21,78,7,8,9,13]
console.log(idades)
console.log("******************************************")
const novasIdade = idades.filter((el) =>{
    if(el >= 18){
        return el
    }
})
console.log(novasIdade)

console.log("******************************************")
for(n of idades){
    if(n >= 18){
        console.log(n)
    }
}
