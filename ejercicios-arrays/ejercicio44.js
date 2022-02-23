/*
indexOf devuelve -1 si el elemento no se encuentra, en caso contrario devuelve la primera posicion donde puede
ser encontrado el elemento introducido

En cambio includes devuelve true o false dependiendo de si encuentra o no encuentra el elemento a buscar.
*/

let frutas = ["Melocotón", "Manzana", "Pera", "Melón", "Fresas"];


//aqui para verificar que se encuentre tengo que definir que sea diferente a -1, que es el único resultado que sabemos
//que no va a devolver en caso de que se encuentre
if (frutas.indexOf("Melocotón") !== -1) {
    console.log("Los melocotones se encuentran en el array");
}

//aqui como sabemos que devolverá true en caso de que lo encuentre, siemplemente con meterlo en una condicion
//ya conseguiría el resultado
if (frutas.includes("Manzana")) {
    console.log("Las manzanas se encuentran en el array");
}
