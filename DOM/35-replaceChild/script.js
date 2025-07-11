// Element.replaceChild

const a = document.createElement('a');
const t3 = document.createTextNode('Texto remplazado');
a.appendChild(t3);

// Selecciono el elemento Padre.
const div = document.getElementById('agregar');

const pa = document.getElementById('pa');

div.replaceChild(a,pa);
