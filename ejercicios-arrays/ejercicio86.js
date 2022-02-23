let cont = 0;
let media = function (acumulador, valorActual) {
    cont++;
    return acumulador + valorActual / cont;
};
const arrayNum = [3, 4, 6, 8, -2, -5];

let resultado = arrayNum.reduce(media);
console.log(resultado);