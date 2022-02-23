const arrayNum = [3, 4, 6, 8, -2, -5];
let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

delete arrayNum[3];
delete arrayStr[1];

for (let pos of arrayNum) {
    console.log(pos);
}

for (let pos of arrayStr) {
    console.log(pos);
}

/*
Elimina el elemento de un array dejando el valor undefined donde antes había un valor.
*/