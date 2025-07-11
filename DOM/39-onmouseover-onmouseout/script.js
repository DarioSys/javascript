// Creo la funcion onmouseover
function acercar(){
    const p = document.getElementById('p');
    p.innerText = 'Acercar';
    p.style.backgroundColor = 'black';
    p.style.color = 'yellow';
    p.style.border = '2px solid yellow';
    p.style.borderRadius = '50px';
}
// Creo la funcion onmouseout
function alejar(){
    const p = document.getElementById('p');
    p.innerText = 'Alejar'
    p.style.backgroundColor = 'yellow';
    p.style.color = 'black';
    p.style.border = '2px solid black';
    p.style.borderRadius = '50px';
}