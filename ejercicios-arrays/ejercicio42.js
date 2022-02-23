let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];
let array = [];

for (let palabra of arrayStr) {
    array.push(palabra.toUpperCase());
}

console.log(array);