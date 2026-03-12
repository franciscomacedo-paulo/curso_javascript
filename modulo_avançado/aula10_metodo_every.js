const array_valores = document.getElementById("array_valores");
const btn = document.querySelector("button");
const result = document.getElementById("result");

const valores = [21, 25, 19, 20, 16, 18, 200];
array_valores.textContent = "[ " + valores + " ]";

const checkValores = (valor) => {
    return (valor < 30)? "verdadeiro" : "falso"
};

btn.addEventListener("click", () => {
  const r = valores.every(checkValores);
  console.log(r);
});

// valores.forEach((el) => {
//   if (el < 30) {
//     console.log(`verdadeiro`);
//   } else {
//     console.log(`falso`);
//   }
// });
// console.log(valores);
