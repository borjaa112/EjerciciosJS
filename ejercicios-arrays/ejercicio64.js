function filterPalabras(arr) {
    let palabrasMayorDeTres = [];
    for (let palabra of arr) {
        if (palabra.length > 3) {
            palabrasMayorDeTres.push(palabra);
        }
    }
    return palabrasMayorDeTres;
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];
console.log(filterPalabras(arrayStr));