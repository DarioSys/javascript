//replaceWith

const h3 = document.createElement('h3');
const t = document.createTextNode('Elemento remplazado');
h3.appendChild(t);

const pa = document.getElementById('pa');

pa.replaceWith(h3);
