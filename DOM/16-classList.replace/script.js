// Selecciono el elemento h1
const h1 = document.getElementById('titulo');

//Imprimo por consola
console.log(h1);

alert("Abrí la consola del navegador con click derecho inspeccionar");

let replaceClase = prompt("Ingrese el valor 0 para remplazar la clase del elemento H1");

if (replaceClase == 0){
    // Remuevo la clase del elemento h1
    h1.classList.replace('claseVieja', 'claseNueva');
    //Imprimo por consola
    console.log(h1); 
} else {
    alert("El valor ingresado no es un 0");
}
         
alert("Adios que tengas un buen día");
alert("Refresca el navegador para volver a empezar");





