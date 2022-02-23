/*
El metodo join une los elementos de un array en una cadena, de
manera opcional se puede añadir un separador para indicar como 
quieres que se separen los elementos dentro de la cadena, por
defecto es una coma.
*/

let colores = ["Azul", "Rojo", "Verde", "Amarillo"]; //defino un array con contenido

let coloresString = colores.join(); //mediante join integro el contenido del array en un string

console.log(coloresString); //imprimo el string que ahora contiene el contenido del array