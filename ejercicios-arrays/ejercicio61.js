function findNegativesNums(arr) {
    let numerosNegativos = [];
    for (let num of arr) {
        if (num < 0) {
            numerosNegativos.push(num);
        }
    }
    return numerosNegativos;
}

const arrayNum = [3, 4, 6, 8, -2, -5];

console.log(findNegativesNums(arrayNum));