//Selecciono los elementos h1 y p
const h1 = document.getElementById('titulo');

const p = document.getElementsByTagName('p');

//
console.log(h1);
console.log(p);

//Elimino el valor del atributo por su Id
h1.removeAttribute('id');

p[0].removeAttribute('id');

//
console.log(h1);
console.log(p);
