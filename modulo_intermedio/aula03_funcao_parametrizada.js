//* PEGANDO OS ELEMENTO HTML

let ano_actual = document.getElementById('ano_actual');
let ano_nasc = document.getElementById('ano_nasc');
let show_idade = document.getElementById('idade');
let btn_calc = document.getElementById('btn_calc');

//** FUNCAO QUE FARA O CALCULO DA IDADE DO USUARIO

// function mostrarIdade(an, anasc){
//     let idade = an - anasc
//     if(an > 2026){
//         alert("Este app calcula a idade a partir do ano actual")
//     }else if(typeof(an) !== 'number' || typeof(anasc) !== 'number'){
//         alert("Digite apenas valores numericos")
//     }
//     return show_idade.innerText = idade
// }

// //* BOTAO QUE VAI EXECUTAR A ACCAO DO CALCULO

// btn_calc.addEventListener('click', ()=>{
//     mostrarIdade(Number(ano_actual.value), Number(ano_nasc.value))
//     console.log(ano_actual.value)
//     console.log(ano_nasc.value)

// })

//** TESTANDO O USO DO confirm()
// let verificacao = confirm("Tenho mais de 18 anos")
// if(verificacao === false){
//     alert("Obrigado pela visita")
    
// }else if(verificacao === true){
//     let user_age = +prompt("Qual é a sua idade:")
//     alert("Seja bem vindo menino de " + user_age + " anos" )
// }

//* USANDO FUNCTION COM PARAMETRO REST PARA PEDIR VARIOS NUMEROS DO USUARIO
let condicao = true

do{
    let valores_digitado  = 0
    let num = +prompt('digite um valor; ')
    function variosValores(...valores){
        valores_digitado = valores.length

    }
    variosValores(num)
    let ver = confirm("Queres digitar um outro número?")
    if(ver === true){
        condicao = true
    }else if(ver === false){
        condicao = false
        alert("no total foram digitado " + valores_digitado + " valores")
        

    }

}while(condicao)

