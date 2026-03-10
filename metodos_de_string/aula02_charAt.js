/*
* Método que retorna um caracter num indeice(posicao especifica)
*/
const frase = "Olá meu amor"
const charFounded = frase.charAt(1)
console.log(charFounded)

const nome = "Francisco"
for(n of nome){
    if(n == 'a'){
        console.log(n)
        break
    }
}
console.log(typeof(nome))