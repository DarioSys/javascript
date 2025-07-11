
// Accedo al elemento parrafo.

const parrafo1 = document.getElementById('p1');
parrafo1.innerHTML = "Selección por Id.";

const parrafo2 = document.getElementsByTagName('p')[1];
parrafo2.innerHTML = "Selección por TagName";

const parrafo3 = document.getElementsByTagName('p');
parrafo3[2].innerHTML = "Selección por TagName2";

const parrafo4 = document.getElementsByClassName('clase')[0];
parrafo4.innerHTML = "Selección por ClassName";

const parrafo5 = document.getElementsByClassName('clase');
parrafo5[1].innerHTML = "Selección por ClassName2";

const parrafo6 = document.querySelector('.clase6');
parrafo6.innerHTML = "Selección por querySelector";

const parrafo7 = document.querySelectorAll('.clase')[2];
parrafo7.innerHTML = "Selección por querySelectorAll";

const parrafo8 = document.querySelectorAll('.clase');
parrafo8[3].innerHTML = "Selección por querySelectorAll2";

console.log(parrafo1);
console.log(parrafo2);
console.log(parrafo3);
console.log(parrafo4);

const parrafo9 = document.getElementById('p9');
const parrafo10 = document.getElementById('p10');
console.log(parrafo9);
console.log(parrafo10);
parrafo9.innerText = '<h1>Hola Mundo</h1>';
parrafo10.innerHTML = '<h1>Hola Mundo</h1>';
document.write(parrafo10);
