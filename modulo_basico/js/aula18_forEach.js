"use strict"
const body = document.querySelector('body')

//* VAMOS APRENDER A USAR O LOOP FOREACH

const users =[
    {name: 'Alexa Bodi', age: 40, contact: '(06) 204-324-345'},
    {name: 'Laurinda Martins', age: 26, contact: '(+244) 935-324-345'},
    {name: 'Bianca Monteiro', age: 29, contact: '(+25) 204-324-345'},
    {name: 'Leticia Bom Despacho', age: 23, contact: '(36) 204-324-345'}
]

users.forEach(function(item, index, arry){
    let unorderList = document.createElement('ul')
    body.appendChild(unorderList)
    unorderList.innerHTML = `<li><strong>Nome:</strong> ${item.name}, <strong> idade:</strong> ${item.age}, <strong>contacto:</strong> ${item.contact}</li>`
    console.log(item)
    console.log(index)
    console.log(arry)
})