const h1 = document.querySelector ('h1');
const form = document.querySelector ('#formulario');
const input1 = document.querySelector ('#calculo1');
const input2 = document.querySelector ('#calculo2');
const boton = document.querySelector ('#btnCalcular');
const resultado = document.querySelector('#result');

form.addEventListener ('submit', sumarInputValues)

function sumarInputValues(event) {
event.preventDefault();
const total = parseInt(input1.value) + parseInt(input2.value);
resultado.innerText = 'resultado = ' + total;
}


