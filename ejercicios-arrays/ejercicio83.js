function myJoin(arr, separador) {
    let valor = "";
    for (let item of arr) {
        valor += item + separador;
    }
    return valor;
}

let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

console.log(myJoin(arrayStr, "+"));