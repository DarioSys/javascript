const div = document.getElementById('contenedor');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');

div.insertAdjacentElement('beforebegin', p1);  // 
div.insertAdjacentElement('afterbegin', p2);   // 
div.insertAdjacentElement('beforeend', p3);    // 
div.insertAdjacentElement('afterend', p4);     // 


