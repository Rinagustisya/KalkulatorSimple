var showHistory = false;

function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        if (!isNaN(result)) {
            result = formatNumber(result);
        }
        document.getElementById('display').value = result;
        
        if (showHistory) {
            var historyElement = document.getElementById('history');
            historyElement.innerHTML += '<br>' + expression + ' = ' + result;
        }
    } catch (e) {
        document.getElementById('display').value = 'Error';
        console.error(e);
    }
}
