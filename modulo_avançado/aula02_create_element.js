const cursos = ['HTML','CSS','JAVASCRIPT','NODEJS','REACT','MYSQL','PYTHON']
const conteiner = document.querySelector('.container')

cursos.forEach((el,i)=>{
    const newDiv =document.createElement('div')
    newDiv.setAttribute('class', 'item')
    newDiv.setAttribute('id', 'd1' + i + 1)
    conteiner.appendChild(newDiv)
    newDiv.innerHTML = el
})
