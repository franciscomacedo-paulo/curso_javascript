let nome = "Mariana"
let num = 12
let logico  = false
let frutas = ['kiwi','manga','abacate']

if((typeof(nome) === 'string' && typeof(num) === 'number') && (typeof(logico) === 'boolean' && typeof(frutas) === 'object')){
    console.log("Todos os tipos correspondem devidamente")
}else{
    console.log("Os tipos não combinam!")

}
console.log("********************************************")

/*
    * DETETOR DE VOLOCIDADE MÁXIMA
*/
const maxVelo = 120;
const minVelo = 60;
const zonaPropri = "bairro"

if(maxVelo == 120 && zonaPropri == "estrada"){
    console.log("Siga a sua viagem com segurança")
}else if(maxVelo > 120 && zonaPropri == "bairro"){
    console.log("Reduza a velocidade dentro das localidades")
}

// if(maxVelo > 120 && zonaRuaral == "Bairro"){
//     console.log("Por favor reduza a velocidade")

// }else if(maxVelo >= 120 && zonaPropri == "Estrada"){
//     console.log("Podes seguir a tua viagem mais com prudencia")
// }
