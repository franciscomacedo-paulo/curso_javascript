/*
    * Este método é parecido com o método charAt(), o grande diferencial é que este método permite indexes negativo
*/
const frase = "Francisco"
const nome = "Lurdes"

//* Usando o metodo charAt()
const letraCharAt = nome.charAt(2)
console.log(letraCharAt)

//* Usando o metodo at()
const letraAt = nome.at(-1)
console.log(letraAt)

//* Usando string[]
const strLetra = nome[2]
console.log(strLetra)