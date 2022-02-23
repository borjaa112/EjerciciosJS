let arrayStr = ['casa', 'Pelota', '', 'NaranNja', 'aGuAcAtE'];

arrayStr.splice(2, 1, "Mesa");

for (let palabra of arrayStr) {
    console.log(palabra);
}