
// Declaramos un array multidimencional.

let array = [[10,3,7],[2,4,1],["a", "b", "c"]];

// Aplicamos el médoto length para ver la longitud e imprimimos.

console.log(array.length);

// Recoremos el array con un bucle for.

for (let i=0; i<array.length; i++) {
    console.log(array[i]);

    // Recorremos 

    for (let j=0; j<array[i].length; j++){
        console.log(array[i][j]);
    }
}  

