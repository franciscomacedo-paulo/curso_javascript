const valor_pesquisa = document.querySelector('input[type="search"]');
const btn_pesquisa = document.getElementById("btn_pesquisa");
const arrDisplay = document.getElementById("arr");
const resultDisplay = document.getElementById("result");
const alert_message = document.getElementById("alert_message");

const valores = [10, 32, 20, 45, 67, 28, 12, 29, 50];
arrDisplay.innerHTML = valores;

//* FUNCAO PARA REMOVER EFEITO PADRAO DE UM BUTTON
function removeDefault(e) {
  const search_value = valor_pesquisa.value;
  if (valor_pesquisa.value === 0) {
    e.preventDefault();
    return;
  }
  alert_message.style.display = "block";
}

btn_pesquisa.addEventListener("click", (evt) => {
    resultDisplay.innerHTML = `Nenhum valor foi encontrado!`
    const encontar = valores.find((el)=>{
        if(el === valor_pesquisa.value){
            removeDefault.innerHTML = el
            return el
        }
    })
    console.log(encontar)
    //removeDefault(evt);
});

// const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
// const fisrtTrough = numbers
//   .filter((num) => num > 0)
//   .find((el, idx, arr) => {
//     if (idx > 0 && el >= arr[idx - 1]) return false;
//     if (idx < arr.length - 1 && el >= arr[idx + 1]) return false;
//     return true;
//   });
// console.log(fisrtTrough);
