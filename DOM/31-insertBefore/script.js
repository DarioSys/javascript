// Creo un elemento. 
const h3 = document.createElement('h3');
// Creo un nodo texto.
const t = document.createTextNode('Bienvenidos');
// Añadimos el texto al elemento h3
h3.appendChild(t);

// Agregar el elemento h3 al Padre que es un DIV.

// Selecciono el elemento Padre.
const div = document.getElementById('agregar');
// Agrego.
div.appendChild(h3);

// Element.insertBefore

const p = document.createElement('p');
const t2 = document.createTextNode('Texto Anterior');
p.appendChild(t2);

div.insertBefore(p, h3);

