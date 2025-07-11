//Selecciono los elementos h1 y p
const h1 = document.getElementById('titulo');

const p = document.getElementsByTagName('p');

//Obtengo el valor del atributo por sus Ids.
const attrib1 = h1.getAttribute('id');

const attrib2 = p[0].getAttribute('id');

//Imprimo por consola el valor de sus atributos.
console.log(attrib1);
console.log(attrib2);

