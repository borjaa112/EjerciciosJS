function negativeNumber(arr) {
    for (let num of arr) {
        if (num < 0) {
            return num;
        }
    }
}

const arrayNum = [3, 4, 6, 8, -2, -5];

console.log(negativeNumber(arrayNum));