"use strict"

const btn = document.getElementById('btn')
const list_compra = document.querySelectorAll('li')
console.log(list_compra)


/*
    * FUNÇÃO PARA GERAR OS VALORES ALEATORIOS
*/
const valores = (valor) =>{
    return Math.floor(Math.random() * (valor + 1))
}

/*
    * FUNÇÃO PARA GERAR OS VALORES RGB PARA MUDAR A COR
*/
function changeBgColor(evt){
    const rgbValues = `rgb(${valores(255)} ${valores(255)} ${valores(255)})`
    evt.target.style.backgroundColor = rgbValues
    console.log(evt)
}

btn.addEventListener('click', changeBgColor);


list_compra.forEach((el,i)=>{
    el.addEventListener('click',(evt)=>{
        let item = evt.target
        console.log("fui clicado " + item.innerHTML)
    })
})
