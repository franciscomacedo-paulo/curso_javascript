const cursos = ['HTML','CSS', 'JAVASCRIPT', 'PHP', 'REACT', 'MySQL','ReactNactive']

const caixaCuros = document.getElementById('caixaCuros')
const curso_name = document.querySelector("#curso_name")
const btn_adicionar_curso = document.querySelector('.btn_adicionar_curso')
const btn_remover_curso_selecionado = document.querySelector('#btn_remover_curso_selecionado')
const btn_curso_sel = document.querySelector('.btn_curso_sel')


cursos.forEach((el)=>{
    //* CRIAÇÃO DA DIV
    const novaDiv = document.createElement('div')
    novaDiv.setAttribute('class', 'curso')
    caixaCuros.appendChild(novaDiv)
    novaDiv.innerHTML = el
    
    //* CRIAÇÃO DO INPU TO TTIPO RADIO
    const btnRadios = document.createElement('input')
    btnRadios.setAttribute('type', 'radio')
    btnRadios.setAttribute('name', 'rb_cursos')
    novaDiv.appendChild(btnRadios)

})

// Button para ver o curso que esta sendo selecionado
btn_curso_sel.addEventListener('click', ()=>{
    const rbC = [...document.querySelectorAll('input[type=radio]')]
    const rdbSelect = rbC.filter((radio)=>{
        if(radio.checked){
            return radio
        }
    })    
    console.log(rbC)
    console.log(rdbSelect)
    
})