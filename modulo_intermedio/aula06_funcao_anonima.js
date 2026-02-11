/*
    * NESTA AULA VAMOS FALAR DE FUNCOES ANONIMAS EM JAVASCRIPT
    * ESTE TIPO DE FUNCAO PRECISA ESTAR ASSOCIADO A UMA VARIAVEL
    * ELA NAO EXISTE ATE QUE SEJA CHAMADA
*/

//* SINTAXE:
let soma = function(v1,v2){
    return v1 + v2
}
console.log(soma(5,5))


console.log("*********************")
//* FUNCAO CONSTRUTORA
let mult = new Function(n1,n2,"return n1*n2")
console.log(mult(4,3))