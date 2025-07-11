// Seleccion del elemento DIV
const padre = document.getElementById('padre');
// Selección de elementos h4
const salida1 = document.getElementById('salida1');
const salida2 = document.getElementById('salida2');
const salida3 = document.getElementById('salida3');
const salida4 = document.getElementById('salida4');
const salida5 = document.getElementById('salida5');

salida.innerHTML = padre.childNodes;

salida1.innerHTML = padre.childNodes.length;
salida2.innerHTML = padre.childNodes[0];
salida3.innerHTML = padre.childNodes[1];
salida4.innerHTML = padre.childNodes[2];
salida5.innerHTML = padre.childNodes[3];

console.log(padre.childNodes);

console.log(padre.childNodes.length);
console.log(padre.childNodes[0]);
console.log(padre.childNodes[1]);
console.log(padre.childNodes[2]);
console.log(padre.childNodes[3]);
