/* 
Forma de declarar un array.

let array = [3, 2, 9, 0, 4];


Otra forma de declarar un array.

let array=[];

array[0]=3;
array[1]=2;
array[2]=9;
array[3]=0;
array[4]=4;

Otra forma

let array = new Array(5); // Se creo un array vacio que ocupa 5 elemenos [,,,,,]

array[0]=3;
array[1]=2;
array[2]=9;
array[3]=0;
array[4]=4;

*/

// Declaramos un array.

let array = [3, 2, 9, 0, 4];

// Aplicamos el médoto length para ver la longitud e imprimimos.

console.log(array.length);

// Recoremos el array con un bucle for.

for (let i=0; i<array.length; i++){
    
    // Imprimimos los valores que contienen en cada elemento.
    console.log(array[i]);   
}







