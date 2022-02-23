/*
El metodo slice devuelve un array, que puede estar cortado mediante los argumentos del comando slice
*/

//este es el array  original
let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

//aqui mediante slice devuelvo el array con las primeras 3 posiciones
let newArrayStr = arrayStr.slice(0, 3);

console.log(newArrayStr);