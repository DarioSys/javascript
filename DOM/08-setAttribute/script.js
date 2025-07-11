//Selecciono los elementos h1 y p
const h1 = document.getElementById('titulo');

const p = document.getElementsByTagName('p');

//
console.log(h1);
console.log(p);

//Modifico el valor del atributo por sus Ids.
h1.setAttribute('id','text');

p[0].setAttribute('id','hola');

//Modifico el valor del atributo por su clase.

p[1].setAttribute('class','nuevaClase');

//Imprimo por consola.
console.log(h1);
console.log(p);
