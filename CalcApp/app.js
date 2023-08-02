let result =  document.querySelector('.result');

function insertChar(char) {
    result.value += char;
}

function clearResult() {
    result.value = '';
}

function deleteChar () {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try{
        result.value = eval(result.value);
    } catch (e) {
        result.value = 'Error';
    }
}
