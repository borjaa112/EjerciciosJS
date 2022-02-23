let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

arrayStr.splice(2, 0, "Hola");

for (let palabra of arrayStr) {
    console.log(palabra);
}