function appendToResult(value) {
    document.getElementById('resultado').value += value;
}

function clearResult() {
    document.getElementById('resultado').value = '';
}

function calculateResult() {
    const resultado = document.getElementById('resultado');
    try {
        resultado.value = eval(resultado.value);
    } catch (error) {
        resultado.value = 'Erro';
    }
}
