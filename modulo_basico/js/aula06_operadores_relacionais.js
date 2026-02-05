
/*
 *NESTA AULA VAMOS FALAR DOS OPERDAORES RELACIONAIS EM JS 
 * TIPOS DE OPERADORES RELACIONAIS OU COMPARITIVOS
 * ==     IGUAL A COMPARA APENAS OS VALORES E NAO OS TIPOS
 * ===    IGUAL A COMPARA OS VALORES, E OS TIPOS TAMBEM  
 * !=     DIFERENTE DE VERIFICA APENAS OS VALORES  
 * !==    DIFERENTE DE VERIFCA OS VALORES,E OS TIPOS  
 * >      MAIOR QUE  
 * <      MENOR QUE  
 * >=     MAIOR OU IGUAL QUE
 * <=     MENOR OU IGUAL QUE 
 * !      NEAGAÇÃ0 TORNA O VERDADEIRO FALSO, E O FALSO VERDADEIRO
*/

const x = 5
const y = 8
const z = "5"

/*
    * == comparação apenas de valores e não de tipos
*/
console.log("------------------ == ------------------")
console.log(x == y) // false
console.log(x == z) // true
/*
    * === comparação de valores e de tipos
*/
console.log("------------------ === ------------------")
console.log(x === y) // false
console.log(x === z) // false
/*
    * != diferente de apneas
*/
console.log("------------------ != ------------------")
console.log(x != y) // false
console.log(x === z) // false
/*
    * !=   diferente de apneas, e !== valor e tipo
*/
console.log("------------------ != ------------------")
console.log(x != y) // true
console.log(x != z) // false x =5 e z = "5"
console.log(x !== z) // true x =5(number) e z = "5"(string)
/*
    * > diferente de apneas
*/
console.log("------------------ > ------------------")
console.log(x >y) // false
console.log(x < z) // false 

/*
    * < diferente de apneas
*/
console.log("------------------ < ------------------")
console.log(x < y) // true
console.log(x < z) // false 

/*
    * ! negação
*/
console.log("------------------ ! ------------------")
console.log(!(x < y)) // true
console.log(x < z) // false 

