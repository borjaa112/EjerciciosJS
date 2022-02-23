const arrayNum = [3, 4, 6, 8, -2, -5];

let numerosPares = arrayNum.filter(numero => {
    if (numero > 0) {
        if (numero % 2 === 0) {
            return numero;
        }
    }
});

console.log(numerosPares);