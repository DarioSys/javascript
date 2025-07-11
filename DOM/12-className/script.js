//Selecciono los elementos h1 y p
const h1 = document.getElementById('titulo');

const p = document.getElementsByTagName('p');

// Modifico el valor de la clase 'titulo' de h1
const clase1 = h1.className = 'clase1';

// Agrego una clase en elemento p que no tiene clase
const clase2 = p[0].className = 'clase2';

//Imprimo por consola
console.log(h1);
console.log(p);

