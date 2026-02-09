function saudacoes(){
    console.log("Sejam bem ao meu canal, saudação 1")
}
saudacoes() //* lhe convidando como nao ele aprece assim mesmo

function saudacoes_2(){
    return "Seja bem vindo ao meu perfil, saudação 2"
}
saudacoes_2() //* ninguem lhe convidou por isso ele nao vai aparecer

//** FUNCAO QUE MOSTRA SE UM VALOR É PAR OU IMPAR
function par_impar(){
    let num = 6
    let result = (num % 2 === 0) ? "Par" : "Impar"
    return result
}

let n = par_impar() //* "n", lhe convidou logo ele vai aparecer
console.log(n)