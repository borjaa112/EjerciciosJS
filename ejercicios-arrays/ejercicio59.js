/*
Filter crea un array con los elementos que cumplen una condicion dada por argumento, esta
condicion debe de estar dentro de una funcion.
*/

let frutas = ["Platano", "Manzana", "Mandarina", "Fresa"];

let frutasMayoresDeSeis = frutas.filter(fruta => fruta.length > 6); //devuelve el resultado a la variable frutasMayoresDeSeis

console.log(frutasMayoresDeSeis);