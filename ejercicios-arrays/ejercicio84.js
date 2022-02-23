/*
Reduce es un metodo de javascript que consigue reducir un array en un solo valor.
Para hacer este proceso se sirve de una funcion, que nosotros debemos de crear
que servirá para especificar en ella que queremos hacer para conseguir el valor
por ejemplo, podemos hacer que la funcion vaya sumando los valores del array.
*/
let suma = function (valorAnterior, valorActual) { //esta funcion se encarga de sumar los numeros y devolverlo
    return valorAnterior + valorActual;
};
let numeros = [1, 4, 5, 6, 2];

console.log(numeros.reduce(suma)); //mediante reduce saco un resultado.