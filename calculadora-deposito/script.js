let form = document.forms.calculator;

//variables globales
let dineroAntes = 0;
let interes = 0;
let anyos = 0;

//deposito INicial
form.money.oninput = function(event){
    //money-before
    dineroAntes = event.target.value;
    let campoDineroAntes = document.body.querySelector("#money-before");
    campoDineroAntes.textContent = event.target.value;
}


//meses
form.months.onchange = function(event){
    anyos = event.target.value;
    anyos = anyos/12;
}

//interes
form.interest.oninput = function(event){
    interes = event.target.value;
}

//calcular resultado:

form.oninput = function(event){
    let result = Math.round(Number(dineroAntes) * (1 + Number(interes)) ** Number(anyos/12));
    console.log(result);
    let dineroDespues = document.body.querySelector("#money-after");
    dineroDespues.textContent = result;
    let representacion = document.body.querySelector("#height-after");
    representacion.style.height = result + "px";
    console.log(representacion);
}
