function myFind(arr, func) {
    return func(arr);
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

let palabraMayorDeTres = function (arr) {
    for (let palabra of arr) {
        if (palabra.length > 3) {
            return palabra;
        }
    }
};

console.log(myFind(arrayStr, palabraMayorDeTres));