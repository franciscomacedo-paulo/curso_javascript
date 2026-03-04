const cursos = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "PHP",
  "REACT",
  "MySQL",
  "ReactNactive",
];

const caixaCuros = document.getElementById("caixaCuros");
const curso_name = document.querySelector("#curso_name");
const btn_adicionar_curso = document.querySelector(".btn_adicionar_curso");
const btn_remover_curso_selecionado = document.querySelector("#btn_remover_curso_selecionado");
const btn_curso_sel = document.querySelector(".btn_curso_sel");

cursos.forEach((el) => {
  //* CRIAÇÃO DA DIV
  const novaDiv = document.createElement("div");
  novaDiv.setAttribute("class", "curso");
  caixaCuros.appendChild(novaDiv);
  novaDiv.innerHTML = el;

  const divRadio = document.createElement("div");
  divRadio.setAttribute("class", "dradio");
  divRadio.setAttribute("id", "dr");
  novaDiv.appendChild(divRadio);

  //* CRIAÇÃO DO INPUT TO TTIPO RADIO
  const btnRadios = document.createElement("input");
  btnRadios.setAttribute("type", "radio");
  btnRadios.setAttribute("name", "rb_cursos");
  divRadio.appendChild(btnRadios);
});

//* FUNCAO PARA EVITAR O COMPORTAMENTO PADRAO DE UM BUTTON
function evitarEnvioPadra(evt) {
  const btnRadio = document.querySelectorAll('input[type="radio"]');
  let tam = Array.from(btnRadio);
  if (tam.length == 0) {
    evt.preventDefault();
    return;
  }
  alert("Seleciona um curso por favor!");
}

//* FUNCAO QUE PERCORRE TODOS OS CURSOS SELECIONADOS
function radioButton() {
  evitarEnvioPadra();
  const btnRadio = document.querySelectorAll('input[type="radio"]');
  const radioConverted = Array.from(btnRadio).filter((el) => {
    return el.checked;
  });
  return radioConverted[0];
}

//* Button para ver o curso que esta sendo selecionado
btn_curso_sel.addEventListener("click", () => {
  //evitarEnvioPadra();
  const radiob = radioButton().parentNode.previousSibling.textContent;
  window.alert(`O curso selecionado foi ${radiob}`);
  console.log(radiob);
});

//* CONFIGURACAO DO BUTTON PARA REMOVER ELEMENTO
btn_remover_curso_selecionado.addEventListener("click", () => {
  //evitarEnvioPadra();
  const radiob = radioButton().parentNode.parentNode;
  radiob.remove();
  window.alert(`O curso foi removido`);
});
