//** PEGANDO OS ELMENTO HTML COM O METODO GETELEMENTOBYID

const d1 = document.getElementById('d1')
const d2 = document.getElementById('d2')
const d3 = document.getElementById('d3')
const d4 = document.getElementById('d4')
const d5 = document.getElementById('d5')


const cursos = [d1,d2,d3,d4,d5]
console.log(cursos)
for(c of cursos){
    console.log(c.innerHTML)
}
//** Usando Metodo Map para criar uma lista
const cursoList = cursos.map((el)=>{
    const c = " "
    return c.innerText = `<ul><li>${el}</li></ul>`
})
console.log(cursoList)