const conteiner = document.querySelector('.conteiner')
const cursos = ['HTML','CSS','JAVASCRIPT','NODEJS']


cursos.forEach((el,i)=>{
    const newDiv = document.createElement('div')
    const binIcon = document.createElement('img')
    binIcon.setAttribute('class', 'icon')
    binIcon.setAttribute('src', '../img/lixeira.png')

    newDiv.setAttribute('class', 'item')

    conteiner.appendChild(newDiv)
    newDiv.appendChild(binIcon)
    newDiv.innerHTML = el

    newDiv.addEventListener('click', (e)=>{
        console.log(e.target)
        conteiner.removeChild(e.target)
    })
    
})
console.log(conteiner.firstElementChild.hasChildNodes())