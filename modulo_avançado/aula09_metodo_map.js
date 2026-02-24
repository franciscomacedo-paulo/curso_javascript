// const { tr } = require("date-fns/locale")

const { id } = require("date-fns/locale")

// /*
//     * NESTA AULA VAMOS FALAR DO METODO MAP()
// */
// const cursos = ['HTML','CSS','JAVASCRIPT', 'NODEJS','REACT']
// const valores = [2,4,5,3,7,8,]
// let m =0
// /*
//     *==================================================
//     * Map()
//     *==================================================
// */
// console.log(valores)
// const x = valores.map((el) =>{
//     // return Math.pow(el, 2)
//     if(el > 5){
//         m = el
        
//     }
// }) 
// console.log("valor "+ m)
// console.log(x)
// console.log("____________________________________\n")
// /*
//     *==================================================
//     * for of() tradicional
//     *==================================================
// */
// let newValues = 0
// for(n of valores){
//     // newValues = n ** 2
//     // console.log(n ** 2)
//     if(n > 4){
//         newValues = n
//         break
//     }
// }
// console.log("____________________________________\n")
// console.log(valores)
// console.log(newValues)

//* VAMOS VER UM EXEMPLO REAL USANDO O MAP() COMO SE FOSSE EM UM APLICATIVO FUNCIONAL DO MUNDO REAL
const produtos =[
    {id: 1, nome: "Smartphone Dalaxy S21", preco: 399.99, temDesconto: true, qtdProduto: 1},
    {id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, qtdProduto: 3},
    {id: 3, nome: "Smart TV LG 55", preco: 2799.00, temDesconto: true, qtdProduto: 5},
    {id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.00, temDesconto: false, qtdProduto: 2},
    {id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, qtdProduto: 1},
    {id: 6, nome: "Tablet iPad Air", preco: 4100.00, temDesconto: false, qtdProduto: 8},
    {id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, qtdProduto: 2},
    {id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, qtdProduto: 7},
    {id: 9, nome: "Impressora HP Multifuncional", preco: 599.00, temDesconto: true, qtdProduto: 5},
    {id: 10, nome: "Caixa de Som POrtátil Sony", preco: 1000.00, temDesconto: false, qtdProduto: 6},
]

//* USANDO O METODO MAP() PARA ADICIONAR DESCONTO AOS PRODUTOS SELECIONADOS, PARA RECEBEREM
//* FUNCAO PARA FAZER O CALCULO DO DESCONTO
const desconto = (valor)=>{
    let aplicarDesconto = (valor.preco) ? valor.preco * 0.9 : valor.preco
    return{
        id: valor.id,
        nome: valor.nome,
        preco: valor.preco = aplicarDesconto.toLocaleString('pt-PT',{
            style: 'currency',currency : 'EUR'
        }),
        qtdProduto: valor.qtdProduto
    }
}
const novoProdutosComDesconto = produtos.map(desconto)
console.log(novoProdutosComDesconto)

console.log("\n******************************************\n")
const precoEstimado = 3000.00;

//* PEGAR SOMENTE OS PRODUTOS COM PREÇOS SUPERIOR A 3000
for(produt of produtos){
    if(produt.preco > precoEstimado){
        console.log(`${produt.id} - ${produt.nome} - ${produt.temDesconto} - ${produt.qtdProduto} - ${produt.preco.toLocaleString('pt-PT', {
            style: 'currency', currency: 'AOA'
        })}`)
    }
}