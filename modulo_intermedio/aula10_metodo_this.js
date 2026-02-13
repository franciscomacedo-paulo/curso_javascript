//** NESTA AULA VAMOS VER OS USO DO OPERADOR THIS EM JAVASCRIPT 

function aluno(nome, nota){
    this.nome
    this.nota

    return `${nome} ${nota}`
}
console.log(aluno('Alexa',9.1))

const pessoa = {
    nome: "Macedo",

    falar:function(){
        console.log("Estou corrento " + this.nome)
    }
}
pessoa.falar()

const dog = {
    nome: "Lupi",

    latir: function(){
        console.log("O cachorro esta latindo " + this.nome)
    }
}