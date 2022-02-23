let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

arrayStr = arrayStr.map(function (palabra) {
    return palabra.toLocaleUpperCase();
});

console.log(arrayStr);