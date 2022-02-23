function myMap(arr, func) {
    let arrayFinal = [];

    for (let item of arr) {
        arrayFinal.push(func(item));
    }
    return arrayFinal;
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

let getNumLetras = function (palabra) {
    return palabra.length;
};

console.log(myMap(arrayStr, getNumLetras));