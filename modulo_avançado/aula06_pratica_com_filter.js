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

    const divRadio = document.createElement('div')
    divRadio.setAttribute('class', 'dradio')
    divRadio.setAttribute('id', 'dr')
    novaDiv.appendChild(divRadio)

    
    //* CRIAÇÃO DO INPUt TO TTIPO RADIO
    const btnRadios = document.createElement('input')
    btnRadios.setAttribute('type', 'radio')
    btnRadios.setAttribute('name', 'rb_cursos')
    divRadio.appendChild(btnRadios)
    

})

// Button para ver o curso que esta sendo selecionado
btn_curso_sel.addEventListener('click', ()=>{
    const rbC = [...document.querySelectorAll('input[type=radio]')]

    //** USANDO LOOP FOR PARA VER QUAL BOTAO RADIO FOI CLICADO
    for(selecionado of rbC){
        if(selecionado.checked === true){
            console.log(selecionado.parentNode.parentNode.textContent)
        }
    }
    //** USANDO METODO FILTER PARA VER QUAL BOTAO RADIO FOI SELECIOANDO
    let radioChecked = rbC.filter((el)=>{
            return el.checked
    })
    console.log(radioChecked[0].parentNode.previousSibling.textContent)
})