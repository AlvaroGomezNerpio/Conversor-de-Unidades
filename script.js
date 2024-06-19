document.getElementById('convert-button').addEventListener('click', convert);

function convert() {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const unitType = document.getElementById('unit-type').value;
    let result = '';

    if (isNaN(inputValue)) {
        result = 'Por favor ingresa un valor válido.';
    } else {
        switch (unitType) {
            case 'meters-kilometers':
                result = `${inputValue} metros = ${inputValue / 1000} kilómetros`;
                break;
            case 'grams-kilograms':
                result = `${inputValue} gramos = ${inputValue / 1000} kilogramos`;
                break;
            case 'celsius-fahrenheit':
                result = `${inputValue} °C = ${(inputValue * 9/5) + 32} °F`;
                break;
        }
    }

    document.getElementById('result').textContent = result;
}
