let arrayStr = ['casa', 'Pelota', '', 'NaraNja', 'aGuAcAtE'];
let array = [];

for (let i = 0; i < arrayStr.length; i++) {
    array.push(arrayStr[i].toUpperCase());
}

console.log(array);