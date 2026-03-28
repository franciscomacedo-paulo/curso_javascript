const numero = [0, 3, 4, 5, 6, 2, 9, 1];
console.log(numero);

let aux = 0;

for (let i = 0; i < numero.length; i++) {
  for (let j = i + 1; j < numero.length; j++) {
    if (numero[i] > numero[j]) {
      aux = numero[i];
      numero[i] = numero[j];
      numero[j] = aux;
    }
  }
  console.log(numero[i]);
}

console.log("----------------------------------------");
console.log("ORGANIZANDO O ARRAY COM O METODO SORT()");
numero.sort();
console.log(numero)