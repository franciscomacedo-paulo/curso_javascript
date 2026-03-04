//* ARRY COM OS CURSOS
const CURSOS = ['HTML','CSS','JAVASCRIPT','PHP','REACT','MYSQL','REACTNATIVE']

//* PEGANDO AS DIV MAES
const caixa_1 = document.getElementById('caixa_dados')
const caixa_2 = document.getElementById('caixa_cursos')
const input_value = document.getElementById('curso')

//* PEGANDO OS BOTOES
const btn_add_before = document.getElementById('btn_add_before')
const btn_add_after = document.getElementById('btn_add_after')
const btn_remove_course = document.getElementById('btn_remove_course')
const btn_select_course = document.getElementById('btn_select_course')


let indexe = 0
function criarCursos(curso){
    //* criando uma nova div para adicionar os cursos
    const divCurso = document.createElement('div')
    divCurso.setAttribute('class', 'cursos')
    divCurso.innerHTML = curso

    //* div com os inputs do tipo radio
    const divContinerInpu = document.createElement('div')
    divContinerInpu.setAttribute('class', 'conteiner_radio')
    divCurso.appendChild(divContinerInpu)

    //* criando os inputs do tipo radio
    const radioInputs = document.createElement('input')
    radioInputs.setAttribute('type','radio')
    radioInputs.setAttribute('name', 'radio_cursos')
    divContinerInpu.appendChild(radioInputs)

    return divCurso
}

//* PERCORRENDO OS MEUS CURSOS
CURSOS.forEach((el,i)=>{
    const newCourse = criarCursos(el)
    caixa_2.appendChild(newCourse)
    indexe ++
})
console.log(CURSOS)


//* FUNCAO QUE EVITA O COMPORTAMENTO PADRAO DE UM BOTAO
function preveEvento(evt){
    const checkedCorse = document.querySelectorAll('input[name="radio_cursos"]')
    const courseTam = Array.from(checkedCorse)

    if(courseTam.length === 0){
        evt.preventDefault()
        return
    }
    alert('Seleciona um curso por favor!')
}
//* FUNCAO PARA FILTRAR O CURSO SELECIONADO
function displaySelectCourse(){
    const checkedCorse = document.querySelectorAll('input[name="radio_cursos"]')
    const convertNodelistToArray = Array.from(checkedCorse).filter((el)=>{
        return el.checked
    })
    return convertNodelistToArray[0]
}

//* FUNCAO PARA ADICIONAR UM CURSO ANTES
function addAfter(){
    const input_valor = input_value.value 



}



btn_select_course.addEventListener('click', ()=>{
    //preveEvento()
    const selectedCorse = displaySelectCourse().parentNode.previousSibling.textContent
    console.log(selectedCorse)
})

btn_remove_course.addEventListener('click', ()=>{
    //preveEvento()
    let removerCourse = displaySelectCourse().parentNode.parentNode
    removerCourse.remove()
    console.log(removerCourse)
})

btn_add_before.addEventListener('click',()=>{
    //preveEvento()
    const selectedCorse = displaySelectCourse().parentNode.parentNode
    const novoCurso = criarCursos(input_value.value)
    caixa_2.insertBefore(novoCurso,selectedCorse)
    console.log(novoCurso)
})
btn_add_after.addEventListener('click', ()=>{
    const selectedCorse = displaySelectCourse().parentNode.parentNode
    const novoCurso = criarCursos(input_value.value)
    caixa_2.insertBefore(novoCurso,selectedCorse.nextSibling)
    console.log(novoCurso)

})