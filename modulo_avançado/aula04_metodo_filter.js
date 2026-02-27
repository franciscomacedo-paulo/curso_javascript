//* NESTA AULA VAMOS FALAR DO METODO FILTER
const idades = [12, 34, 54, 10, 18, 21, 78, 7, 8, 9, 13];
console.log(idades);
console.log("******************************************");

const produtos = [
  {
    id: 1,
    nome: "Smartphone Dalaxy S21",
    preco: 399.99,
    temDesconto: true,
    qtdProduto: 1,
  },
  {
    id: 2,
    nome: "Notebook Dell Inspiron",
    preco: 4500.0,
    temDesconto: false,
    qtdProduto: 3,
  },
  {
    id: 3,
    nome: "Smart TV LG 55",
    preco: 2799.0,
    temDesconto: true,
    qtdProduto: 5,
  },
  {
    id: 4,
    nome: "Fone de Ouvido Bluetooth JBL",
    preco: 299.0,
    temDesconto: false,
    qtdProduto: 2,
  },
  {
    id: 5,
    nome: "Câmera DSLR Canon",
    preco: 3200.0,
    temDesconto: true,
    qtdProduto: 1,
  },
  {
    id: 6,
    nome: "Tablet iPad Air",
    preco: 4100.0,
    temDesconto: false,
    qtdProduto: 8,
  },
  {
    id: 7,
    nome: "Console PlayStation 5",
    preco: 4699.0,
    temDesconto: true,
    qtdProduto: 2,
  },
  {
    id: 8,
    nome: "Smartwatch Apple Watch",
    preco: 2499.0,
    temDesconto: false,
    qtdProduto: 7,
  },
  {
    id: 9,
    nome: "Impressora HP Multifuncional",
    preco: 599.0,
    temDesconto: true,
    qtdProduto: 5,
  },
  {
    id: 10,
    nome: "Caixa de Som POrtátil Sony",
    preco: 1000.0,
    temDesconto: false,
    qtdProduto: 6,
  },
];

// const novasIdade = idades.filter((el) => {
//   if (el >= 18) {
//     return el;
//   }
// });
// console.log(novasIdade);

// console.log("******************************************");
// for (n of idades) {
//   if (n >= 18) {
//     console.log(n);
//   }
// }
for(valores of produtos){
    if(valores.temDesconto){
        valores.qtdProduto += 10
        console.log(valores)
    }
}
