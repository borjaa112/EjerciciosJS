let suma = (valorAnterior, valorActual) => valorAnterior + valorActual;
const arrayNum = [3, 4, 6, 8, -2, -5];

let resultado = arrayNum.reduce(suma);
console.log(resultado);