let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

let arrayStrCap = arrayStr.map(function (palabra) {
    return palabra.toUpperCase();
});

console.log(arrayStrCap);