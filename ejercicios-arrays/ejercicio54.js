function findPalabra(arr, palabraBuscada) {
    let cont = 0;
    for (let palabra of arr) {
        if (palabra === palabraBuscada) {
            return cont;
        }
        cont++;
    }
    return -1;
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

console.log(findPalabra(arrayStr, "casa"));