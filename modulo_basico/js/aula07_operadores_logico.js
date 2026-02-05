/*
    *NESTA AULA VAMOS FALAR SOBRE 
    * TIPOS DE OPERADORES
    * &&    AND  PRECISA QUE AS DUAS EXPRESSOES SEJAM VERDADEIRAS
    * ||    OR   PRECISA QUE PELO UMA DAS EXPRESSOES SEJA VERDADEIRA   
    * !     NOT  NEGAÇÃO
    * ??
*/

let v1 = 4
let v2 = 5
let v3 = 6

console.log("------------------ && ------------------")
console.log(v1 < v2 && v2 < v3) //true

console.log("------------------ || ------------------")
console.log(v2 > v1 || v1 > v3) //true

console.log("------------------ ! ------------------")
console.log(!(v1 > v3 || v2 > v1)) // now it will be false