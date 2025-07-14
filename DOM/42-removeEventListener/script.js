// Selección del DIV contenedor.
const contenedor = document.getElementsByTagName('div');
const p = document.getElementsByTagName('p');

// Añadiendo eventos mouseover y mouseout
contenedor[0].addEventListener('mouseover', blue) 
contenedor[0].addEventListener('mouseout', bluewhite) 

function blue(){
    contenedor[0].style.backgroundColor = 'blue';
    p[0].style.color = 'white';
}

function bluewhite(){
    contenedor[0].style.backgroundColor = 'white';
    p[0].style.color = 'black';
}

// Añadiendo eventos mouseover y mouseout
contenedor[1].addEventListener('mouseover', green) 
contenedor[1].addEventListener('mouseout', greenwhite) 

function green(){
    contenedor[1].style.backgroundColor = 'green';
    p[1].style.color = 'white';
}

function greenwhite(){
    contenedor[1].style.backgroundColor = 'white';
    p[1].style.color = 'black';
}

// Añadiendo eventos mouseover y mouseout
contenedor[2].addEventListener('mouseover', red) 
contenedor[2].addEventListener('mouseout', redwhite) 

function red(){
    contenedor[2].style.backgroundColor = 'red';
    p[2].style.color = 'white';
}

function redwhite(){
    contenedor[2].style.backgroundColor = 'white';
    p[2].style.color = 'black';
}

// Eliminando evento azul

contenedor[3].addEventListener('click', removeblue);
function removeblue(){
    contenedor[0].removeEventListener('mouseover', blue)
    contenedor[0].removeEventListener('mouseout', bluewhite)
}

// Eliminando evento verde

contenedor[4].addEventListener('click', removegreen);
function removegreen(){
    contenedor[1].removeEventListener('mouseover', green)
    contenedor[1].removeEventListener('mouseout', greenwhite)
}

// Eliminando evento red

contenedor[5].addEventListener('click', removered);
function removered(){
    contenedor[2].removeEventListener('mouseover', red)
    contenedor[2].removeEventListener('mouseout', redwhite)
}

