/*
    * NESTA AULA VAMOS FALAR DO METODO MAP()
*/
const cursos = ['HTML','CSS','JAVASCRIPT', 'NODEJS','REACT']
const valores = [2,4,5,3,7,8,]
let m =0
/*
    *==================================================
    * Map()
    *==================================================
*/
console.log(valores)
const x = valores.map((el) =>{
    // return Math.pow(el, 2)
    if(el > 5){
        m = el
        
    }
}) 
console.log("valor "+ m)
console.log(x)
console.log("____________________________________\n")
/*
    *==================================================
    * for of() tradicional
    *==================================================
*/
let newValues = 0
for(n of valores){
    // newValues = n ** 2
    // console.log(n ** 2)
    if(n > 4){
        newValues = n
        break
    }
}
console.log("____________________________________\n")
console.log(valores)
console.log(newValues)