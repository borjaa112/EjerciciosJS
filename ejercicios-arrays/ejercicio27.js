let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

arrayStr.splice(arrayStr.length, 0, "Avion", "Raqueta");

for (let palabra of arrayStr) {
    console.log(palabra);
}