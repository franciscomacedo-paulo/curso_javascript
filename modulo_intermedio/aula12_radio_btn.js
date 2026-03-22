const radioButton = [...document.querySelectorAll('input[name="calculo"]')];
const btn_mostrar = document.getElementById("btn");
const primeiro_valor = document.querySelector("#valor1");
const segundo_valor = document.querySelector("#valor2");
const resultado = document.querySelector('#result')


function calculo(v1=0, sinal,v2=0){
    let s = Number(v1) + Number(v2)
    resultado.innerHTML = s

}
function verificarSelecionado(){
    let radioSelecionado = '';
    radioButton.forEach((el)=>{
        if(el.checked){
            radioSelecionado = el.value   
        }
    })
    if(radioSelecionado === 'Soma'){
        //calculo(primeiro_valor.value,segundo_valor.value)
        let s = Number(primeiro_valor.value) + Number(segundo_valor.value)
        resultado.innerHTML = s

    }else if(radioSelecionado === 'ubtração'){
        let s = Number(primeiro_valor.value) - Number(segundo_valor.value)
        resultado.innerHTML = s

    }else if(radioSelecionado === 'Multiplicar'){
        let s = Number(primeiro_valor.value) * Number(segundo_valor.value)
        resultado.innerHTML = s
    }    
    return radioSelecionado
}


btn_mostrar.addEventListener('click', (evt) =>{
    evt.preventDefault()
    console.log(verificarSelecionado())
})

