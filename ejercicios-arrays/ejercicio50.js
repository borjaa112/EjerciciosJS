function myIndexOf(arr, item) {
    let encontrado = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            encontrado = i;
            break;
        }
    }
    return encontrado;
}

const arrayNum = [3, 4, 6, 8, -2, -5];

console.log(myIndexOf(arrayNum, -2));