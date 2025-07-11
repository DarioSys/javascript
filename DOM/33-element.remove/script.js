// Selecciono el parrafo
const p = document.getElementsByTagName('p');
// Imprimo por consola 
console.log(p);

let eliminar = prompt("Escriba un numero del 1 al 4 para eliminar un parrafo");

switch(eliminar){
    case "1":
        p[0].remove();
        alert("parrafo 1 eliminado");
        break;  
    case "2":
        p[1].remove();
         alert("parrafo 2 eliminado");
        break;
    case "3":
        p[2].remove();
         alert("parrafo 3 eliminado");
        break;
    case "4":
        p[3].remove();
         alert("parrafo 4 eliminado"); 
        break;
    default:
        alert("Ingrese un numero comprendido entre 0 a 4");           
}