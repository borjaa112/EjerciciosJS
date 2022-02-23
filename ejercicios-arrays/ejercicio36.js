function myConcat(...args) {
    return [...args];
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];
const arrayNum = [3, 4, 6, 8, -2, -5];
let decoracion = ["Mesa", "Silla"];

let resultado = myConcat(...arrayNum, ...arrayStr, ...decoracion);
console.log(resultado);