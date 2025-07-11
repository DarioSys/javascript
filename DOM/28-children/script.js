// Seleccion del elemento DIV
const padre = document.getElementById('padre');
// Selección de elementos h4
const salida1 = document.getElementById('salida1');
const salida2 = document.getElementById('salida2');
const salida3 = document.getElementById('salida3');
const salida4 = document.getElementById('salida4');
const salida5 = document.getElementById('salida5');

salida.innerHTML = padre.children;

salida1.innerHTML = padre.children.length;
salida2.innerHTML = padre.children[0];
salida3.innerHTML = padre.children[1];
salida4.innerHTML = padre.children[2];
salida5.innerHTML = padre.children[3];

console.log(padre.children);

console.log(padre.children.length);
console.log(padre.children[0]);
console.log(padre.children[1]);
console.log(padre.children[2]);
console.log(padre.children[3]);
