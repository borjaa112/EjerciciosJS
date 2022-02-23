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

let menorMayor = arrayStr.sort(compararPorTamano);
let mayorMenor = arrayStr.reverse(compararPorTamano);

console.log(mayorMenor);