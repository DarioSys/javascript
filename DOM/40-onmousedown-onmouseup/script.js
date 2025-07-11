// Creo la funcion onmousedown
function presionar(){
    const p = document.getElementById('p');
    p.innerText = 'Persionar';
    p.style.backgroundColor = 'black';
    p.style.color = 'yellow';
    p.style.border = '2px solid yellow';
    p.style.borderRadius = '50px';
}
// Creo la funcion onmouseup
function soltar(){
    const p = document.getElementById('p');
    p.innerText = 'Soltar'
    p.style.backgroundColor = 'yellow';
    p.style.color = 'black';
    p.style.border = '2px solid black';
    p.style.borderRadius = '50px';
}