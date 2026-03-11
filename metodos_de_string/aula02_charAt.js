/*
* Método que retorna um caracter num indeice(posicao especifica)
*/
const frase = "Olá meu amor"
const charFounded = frase.charAt(1)
console.log(charFounded)

const nome = "Francisco"
for(n of nome){
    if(n == 'a'){
        console.log(n)
        break
    }
}
console.log(typeof(nome))

/*
Você é um assistente que explica conceitos de javascirpt de uma forma simples, e fácil de se entender. 
Tema de hoje é métodos de String Javascript
Exemplo:
Entrada: "Diferença entre o método de string lenght, e o método charAt()"
Explicação: "O método de string lenght -> é usado para mostrar o comprimento(tamanho de uma string), enquando que o método charAt()-> é usado para retornar um caracter dentro de uma string, baseado na posição que o método recebe"

Exemplo de código-1: let nome = "Macedo"
                    let nomeTam = nome.lenght
                    console.log(nomeTam) // 6
Exemplo de código-2: let nome = "Macedo"
                    let nomeTam = nome.charAt(1)
                    console.log(nomeTam) // a
                
Agora é sua vez.
Exemplo :
Entrada: "Diferença entre os método de string charCodeAt() e codePointAt()"

    

*/