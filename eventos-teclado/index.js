let input = document.body.querySelector('#input');
let textarea = document.body.querySelector('#textarea');
let clear = document.body.querySelector('#clear');

input.onkeydown = keyaction;
input.onkeyup = keyaction;

clear.onclick = clearall;


function keyaction(event) {
    textarea.value += event.type+ "\t key=" + event.key + "\t code=" + event.code + "\t repeat="+event.repeat + "\n";
    textarea.scrollTop = 1e6;
}

function clearall(event) {
    textarea.value = "";
    input.value = "";
}