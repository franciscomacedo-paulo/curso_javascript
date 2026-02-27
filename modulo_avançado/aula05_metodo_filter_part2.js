const produtosDaTerra = [
  // *Legumes
  { id: 1, nome: "Batata Doce", categotia: "Legume" },
  { id: 2, nome: "Inhame", categotia: "Legume" },
  { id: 3, nome: "Cenoursa", categotia: "Legume" },
  { id: 4, nome: "Beterraaba", categotia: "Legume" },
  { id: 5, nome: "Pepino", categotia: "Legume" },

  //* Frutas
  { id: 6, nome: "Abacaxi", categotia: "Fruta" },
  { id: 7, nome: "Morango", categotia: "Fruta" },
  { id: 8, nome: "Ananas", categotia: "Fruta" },
  { id: 9, nome: "Amecha", categotia: "Fruta" },
  { id: 10, nome: "Assafrao", categotia: "Fruta" },

  //* Verduras
  { id: 11, nome: "Couve-Flor", categotia: "Verduras" },
  { id: 12, nome: "Repolho", categotia: "Verduras" },
  { id: 13, nome: "Coentro", categotia: "Verduras" },
  { id: 14, nome: "Espinafre", categotia: "Verduras" },
  { id: 15, nome: "Espargo", categotia: "Verduras" },
];

produtosDaTerra.map((el) => {
  console.table(el);
});

console.log("***************************************************************");

const onlyVegetables = produtosDaTerra.filter((el) => {
  if (el.categotia === "Verduras") return el;
});
console.log(onlyVegetables);
