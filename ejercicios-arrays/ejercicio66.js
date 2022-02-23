/*
Map crea un array con los resultados de la funcion asignada, recorriendo
el array y pasando cada elemento del array a la funcion
*/

let palabras = ["Limon", "Silla", "Avion", "Television", "Manzana"];

let cont = 0;
let palabrasNumeradas = palabras.map(function (palabra) { //se pasa a la funcion cada palabra y el resultado lo guarda en un array
    cont++;
    return cont + ". " + palabra;
});

console.log(palabrasNumeradas); //este es el array que da como resultado el metodo map