// Selección del primer DIV.
const padre = document.getElementById('padre'); 

// Imprimir por consola el elemento DIV.
console.log(padre)
// Imprimir los elementos hijos del contenedor padre mediante la propiedad children.
console.log(padre.children);
// Imprimir la longitud.
console.log(padre.children.length);
// Acceder a cada elemento por sus indices.
console.log(padre.children[0]);
console.log(padre.children[1]);

// Iterar sobre los elementos hijos para cambiar el color del texto.
for (let i=0; i< padre.children.length; i++){
   padre.children[i].style.color = "white";
}

const div = document.getElementsByTagName('div');

// Imprimir por consola
console.log(div);
console.log(div.length);
console.log(div[0]);
console.log(div[1]);

for (let j=0; j< div.length; j++){
  div[j].id= 'otroid';
}

console.log(div);
