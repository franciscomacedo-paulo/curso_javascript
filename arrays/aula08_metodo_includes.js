const pesquisar = document.getElementById("produto");
const btn = document.querySelector("button");
const resultado = document.querySelector(".lista_produto");
const produtos_na_lista = [];

const frutas = [
  "Maçã", "Banana", "Laranja", "Manga", "Uva", "Morango",
  "Abacaxi", "Melancia", "Pêssego", "Pera", "Kiwi",
  "Cereja", "Limão", "Goiaba", "Maracujá",
];

function verificarInput() {
  const inputValue = pesquisar.value.trim();

  if (inputValue.length === 0) {
    alert("Digite algo primeiro");
    return; // ✅ Interrompe a execução se o campo estiver vazio
  }

  if (frutas.includes(inputValue)) {
    produtos_na_lista.push(inputValue);
    renderizarLista(); // ✅ Atualiza a lista após adicionar
  } else {
    alert("Infelizmente não temos esse produto em nossa lista");
  }


  pesquisar.value = "";
}

// ✅ Função separada, chamada sempre que a lista muda
function renderizarLista() {
  resultado.innerHTML = ""; // Limpa antes de re-renderizar

  const ul = document.createElement("ul");
  ul.setAttribute('id', 'list')

  produtos_na_lista.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el;
    ul.appendChild(li);
  });

  resultado.appendChild(ul);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  verificarInput();
});



