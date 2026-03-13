
const valores = [1,2,3,4,5]

// Com o metodo reduce()
const reduzirValores = valores.reduce((anterior, actual)=>{
    const result  = anterior + actual
    return result
},5)

console.log(reduzirValores)

// Sem o metodo reduce()
let s = 0
for(n of valores){
    s = s + n
}
console.log(s)