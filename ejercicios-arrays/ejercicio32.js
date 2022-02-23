function mySlice(arr, indexInicio, indexFinal) {
    let i = 0;
    let final = arr.length;
    let array = [];
    if (indexInicio !== undefined) {
        i = indexInicio;
    }
    if (indexFinal !== undefined) {
        final = indexFinal;
    }

    for (i; i < final; i++) {
        array.push(arr[i]);
    }

    return array;
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];
let arraySlice = mySlice(arrayStr);
console.log(arraySlice);