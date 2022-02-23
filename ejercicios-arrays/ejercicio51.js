/*
Find devuelve el valor que cumple la condicion que se le especifica, en caso de no
cumplirse la condicion devuelve undefined

FindIndex devuelve el valor que cumple la condicion, en cambio, cuando no encuentra
ningun elemento que cumpla con la condicion devuelve -1.
*/

let frutas = ["Melocotón", "Manzana", "Pera", "Melón", "Fresas"];

console.log(frutas.find(fruta => fruta === "ss")); //devuelve undefined

console.log(frutas.findIndex("m")); //devuelve -1