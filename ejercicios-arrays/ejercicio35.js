function myConcat(arr1, arr2) {
    let arrFinal = [];

    arrFinal = [...arr1, ...arr2];
    return arrFinal;
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];
const arrayNum = [3, 4, 6, 8, -2, -5];

console.log(myConcat(arrayNum, arrayStr));