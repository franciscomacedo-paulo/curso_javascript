const array_valores = document.getElementById("array_valores");
const btn = document.querySelector("button");
const result = document.getElementById("result");

const valores = [21, 25, 19, 20, 16, 18, 20];

function verificarPar(valor){
    let even = (valor % 2 === 0)? "Par" : " Impar";
    return even
}


btn.addEventListener('click',(evt)=>{
    const algumValor = valores.some(verificarPar)
    console.log(algumValor)
})

const valores_bolean = [true, "true", 1]

function checkBolean(valor){
    if(typeof valor === 'string'){
        return valor = valor.toLowerCase().trim()
    }

    return valores_bolean.some((e) => e === valor)
}
console.log(checkBolean("MANGA"))
console.log(checkBolean('KIWI'))
console.log(checkBolean(10))
console.log(checkBolean(true))

