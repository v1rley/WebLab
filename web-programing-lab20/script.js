// Створення елементів сторінки та задання стилів
window.addEventListener('DOMContentLoaded', function () {
    // Створення контейнера калькулятора
    var calculatorContainer = document.createElement('div');
    calculatorContainer.style.width = '100%';
    calculatorContainer.style.height = '100vh';
    calculatorContainer.style.display = 'flex';
    calculatorContainer.style.alignItems = 'center';
    calculatorContainer.style.justifyContent = 'center';
    document.body.appendChild(calculatorContainer);

    // Створення елементів калькулятора
    var calculator = document.createElement('div');
    calculator.style.width = '100%';
    calculator.style.height = '100%';
    calculator.style.padding = '20px';
    calculator.style.border = '1px solid #ccc';
    calculator.style.borderRadius = '5px';
    calculatorContainer.appendChild(calculator);

    var input = document.createElement('input');
    input.type = 'text';
    input.style.width = '100%';
    input.style.marginBottom = '10px';
    calculator.appendChild(input);

    var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    buttonContainer.style.gridAutoRows = '120px';
    buttonContainer.style.gridGap = '20px';
    calculator.appendChild(buttonContainer);

    var buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];

    buttons.forEach(function (value) {
        var button = document.createElement('button');
        button.textContent = value;
        button.style.padding = '10px';
        button.style.fontSize = '18px';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.backgroundColor = '#f2f2f2';
        button.style.cursor = 'pointer';
        buttonContainer.appendChild(button);
    });

    // Логіка калькулятора
    var operand1 = null;
    var operator = null;
    var shouldResetInput = false;

    buttonContainer.addEventListener('click', function (event) {
        var target = event.target;

        if (target.tagName === 'BUTTON') {
            var buttonText = target.textContent;

            switch (buttonText) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if (shouldResetInput) {
                        input.value = '';
                        shouldResetInput = false;
                    }
                    input.value += buttonText;
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    operand1 = parseFloat(input.value);
                    operator = buttonText;
                    shouldResetInput = true;
                    break;
                case '=':
                    var operand2 = parseFloat(input.value);
                    var result = calculateResult(operand1, operand2, operator);
                    input.value = result;
                    shouldResetInput = true;
                    operand1 = null;
                    operator = null;
                    break;
                default:
                    break;
            }
        }
    });

    function calculateResult(operand1, operand2, operator) {
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
            default:
                return null;
        }
    }
});
