const input = document.querySelector('#input');
const maiusculo = document.querySelector('#maiusculo');
const minusculo = document.querySelector('#minusculo');

function handleInput() {
    if (maiusculo.checked) {
        input.value = input.value.toUpperCase();
    } else if (minusculo.checked) {
        input.value = input.value.toLowerCase();
    } else {
        console.log('Nenhuma opção selecionada');
    }
}

function updateCase(type) {
    if (type === 'upper') {
        input.value = input.value.toUpperCase();
    } else if (type === 'lower') {
        input.value = input.value.toLowerCase();
    }
}
