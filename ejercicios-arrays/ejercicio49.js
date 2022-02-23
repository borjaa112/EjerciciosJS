function myIncludes(arr, item) {
    let encontrado = false;
    for (let palabra of arr) {
        if (palabra === item) {
            encontrado = true;
        }
    }
    return encontrado;
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

console.log(myIncludes(arrayStr, "casa"));