function compararPorTamano(a, b) {
    if (a.length < b.length) {
        return -1;
    }
    if (a.length > b.length) {
        return 1;
    }
    if (a.length === b.length) {
        return 0;
    }
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

let arrayStrLetters = arrayStr.sort(compararPorTamano);

console.log(arrayStrLetters);