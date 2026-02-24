const conteiner = document.querySelector('.conteiner')
const cursos = ['HTML','CSS','JAVASCRIPT','NODEJS']


cursos.forEach((el,i)=>{
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'item')
    conteiner.appendChild(newDiv)
    newDiv.innerHTML = el
    
    const binIcon = document.createElement("img")
    binIcon.setAttribute('class', 'icon')
    binIcon.setAttribute("src", "./lixeira.png")
    newDiv.appendChild(binIcon)

    


    newDiv.addEventListener('click', (e)=>{
        console.log(e.target)
        e.stopPropagation()
    })

    binIcon.addEventListener('click', (evet)=>{
        console.log("fui cliacado")
        conteiner.removeChild(evet.target.parentNode)
    })
    
})
console.log(conteiner.firstElementChild.hasChildNodes())