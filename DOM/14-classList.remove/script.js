// Mensaje Alert

alert("Dale OK a todo, después cuando termina refresca la pagina, abrí para inspecionar elemento refresca la pág y despues carga los valores");


// Selecciono el elemento h1
const h1 = document.getElementById('titulo');

//Imprimo por consola
console.log(h1);

let removerClaseh = prompt("Ingrese el valor 0 para eliminar la clase del elemento H1");

if (removerClaseh == 0){
    // Remuevo la clase del elemento h1
    h1.classList.remove('ClaseH');
    //Imprimo por consola
    console.log(h1);
} else {
    alert("El valor ingresado no es un 0 .Actualice el navegador")
}

// Selecciono el elemento p
const p = document.getElementsByTagName('p');

//Imprimo por consola
console.log(p);

let removerClasep = prompt("Ingrese el valor 0 para eliminar la clase del elemento P");

if (removerClasep == 0){
    // Remuevo la clase del elemento p
    p[0].classList.remove('ClaseP');
    //Imprimo por consola
    console.log(p);
} else {
    alert("El valor ingresado no es un 0 .Actualice el navegador")
}

alert("Gracias, que tengas un buen día");








