function myFilter(arr, func) {
    let array = [];

    for (let palabra of arr) {
        if (func(palabra) !== undefined) {
            array.push(palabra);
        }
    }

    return array;
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];


let palabraMayorDeTres = function (palabra) {
    if (palabra.length > 3) {
        return palabra;
    } else {
        return undefined;
    }
};

console.log(myFilter(arrayStr, palabraMayorDeTres));