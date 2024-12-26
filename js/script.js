
let resultado = document.getElementById('table-container');
document.querySelector('button').addEventListener('click', ()=>{
    resultado.innerHTML = '';
    let numero = document.getElementById('input-number').value;
    for (let index = 0; index <= 10; index++) {
        let tabuada = numero*index;
        resultado.innerHTML+= `${numero} x ${index} = ${tabuada} <br>`;
        
    }
})