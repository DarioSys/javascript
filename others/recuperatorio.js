// Recuperatorio de Laboratorio de Programacion I.  Fecha: 17/10/2023
// Apellido y Nombre:  

// 1) Array con Palabras de 17 Caracteres y de 20 Palabras.

let ab3ceda = 'abcdefghijkmnñopqrstuvwxyz';
let pAl4bras = [];
for (let p=0; p<20; p++){
    let palab = "";
    for(let c=0; c<17; c++){
        palab += ab3ceda [Math.floor(Math.random()* ab3ceda.length)];
    }
    pAl4bras.push(palab);
}
console.log(pAl4bras);

// 2) Array numeros aleatorios de 150 numeros desde el 100 al 1500

const numAleto = []; // Creo un array vacio
for (let i = 0; i< 150; i++){
    numAleto.push(Math.floor(Math.random()*(1500-100 +1))+ 100);
}
console.log(numAleto);

// 3) Ordeno mi array de forma ascendente para poder extrar los 3 mayores y menores

numAleto.sort((a,b)=>a-b);
console.log(numAleto);
//Extraigo los menores
const M3nores = numAleto.slice(0,3);
//Extraigo los mayores
const M4yores = numAleto.slice(-3);
//Ahora imprimo los mayores y menores
console.log(M3nores);
console.log(M4yores);

//4) Extraer del vector string los 2 antepenultimos caracteres.
// y los 2 de la primera posición

let caraextr = [];
let extr4er;

for (let ex =0; ex<pAl4bras.length; ex++){
   extr4er = pAl4bras[ex].substr(12,2) +
   pAl4bras[ex].substr(1,2);
}
caraextr.push(extr4er);
console.log(caraextr);
