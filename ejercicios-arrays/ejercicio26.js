const arrayNum = [3, 4, 6, 8, -2, -5];

arrayNum.splice(0, 0, 2, 5);

for (let numero of arrayNum) {
    console.log(numero);
}