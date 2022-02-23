function myFindIndex(arr, func) {
    return func(arr);
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

let palabraMayorDeTres = function (arr) {
    let pos = 0;
    for (let palabra of arr) {
        if (palabra.length > 3) {
            return pos;
        }
        pos++;
    }
};

console.log(myFindIndex(arrayStr, palabraMayorDeTres));