// Selección del DIV contenedor.
const contenedor = document.getElementsByTagName('div');
// Añadiendo eventos
contenedor[0].addEventListener('click', function blue(){
    contenedor[0].style.backgroundColor = 'blue';
});

contenedor[1].addEventListener('click', green) 

function green(){
    contenedor[1].style.backgroundColor = 'green';
}

contenedor[2].addEventListener('click', red) 

function red(){
    contenedor[2].style.backgroundColor = 'red';
}

contenedor[3].addEventListener('click', yellow) 

function yellow(){
    contenedor[3].style.backgroundColor = 'yellow';
}
    