function getDouble(arr) {
    let numDouble = [];
    for (let num of arr) {
        numDouble.push(num * 2);
    }
    return numDouble;
}

const arrayNum = [3, 4, 6, 8, -2, -5];
console.log(getDouble(arrayNum));