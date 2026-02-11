/*
    * NESTA AULA VAMOS FALAR DE UMA OUTRA FORMA DE FUNCOES ANONIMA, CONHECIDA COMO ARROW FUNCTION
*/

//* FUNCAO ANONIMA NORMAL
 const nome = function(){
    return "Macedo" 
 }
 console.log(nome())

 //* ARROW FUNCTION 
 console.log("************ ARROW FUNCTION ***********")
 const num = [4,3,5,6,1]
 const mediaAritmetica = (...valores) =>{
    let tan = valores.length;
    let s = 0
    for(v of valores){
        s += v
    }
    return `Soma total ${s } media aritmetica ${s / tan}`
 }

 console.log(mediaAritmetica(...num))