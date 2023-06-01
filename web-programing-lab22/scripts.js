//
function seconds(total) {
    return total % 60;
}
//
function perimeter(side, count) {
    return side * count;
}
//
function printNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
//
function calculate(a, b, c) {
    var average = (a + b + c) / 3;
    console.log('Середнє арифметичне: ' + average);
}
//a
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}
//b
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}
//c
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}
//
function arrayOperations(array) {
    var max = Math.max(...array);
    var min = Math.min(...array);
    var sum = array.reduce((acc, curr) => acc + curr, 0);
    var average = sum / array.length;
    var oddNumbers = array.filter(num => num % 2 !== 0);

    console.log('Найбільше значення: ' + max);
    console.log('Найменше значення: ' + min);
    console.log('Загальна сума елементів: ' + sum);
    console.log('Середнє арифметичне: ' + average);
    console.log('Непарні значення: ' + oddNumbers);
}
//
function processMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) {
                matrix[i][j] = 1;
            } else if (matrix[i][j] < 0) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

// Приклад використання:
var matrix = [
    [1, -2, 3, -4, 5],
    [-6, 7, -8, 9, -10],
    [11, -12, 13, -14, 15],
    [-16, 17, -18, 19, -20],
    [21, -22, 23, -24, 25]
];

var processedMatrix = processMatrix(matrix);
console.log(processedMatrix);
//
function add(a, b) {
    console.log('Результат додавання: ' + (a + b));
}

function sub(a, b) {
    console.log('Результат віднімання: ' + (a - b));
}

function mul(a, b) {
    console.log('Результат множення: ' + (a * b));
}

function div(a, b) {
    if (b !== 0) {
        console.log('Результат ділення: ' + (a / b));
    } else {
        console.log('Помилка: ділення на нуль');
    }
}
//
function numberProperties(number) {
    var isPositive = number > 0;
    var isPrime = checkPrime(number);
    var divisibleBy23569 = number % 2 === 0 && number % 3 === 0 && number % 5 === 0 && number % 6 === 0 && number % 9 === 0;

    console.log('Число є ' + (isPositive ? 'позитивним' : 'негативним'));
    console.log('Число є ' + (isPrime ? 'простим' : 'не простим'));
    console.log('Число ділиться на 2, 3, 5, 6, 9 без залишку: ' + divisibleBy23569);
}

function checkPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
//
function modifyArray(array) {
    var reversedArray = array.reverse();
    var squaredArray = reversedArray.map(item => typeof item === 'number' ? item ** 2 : item);
    return squaredArray;
}
//
function removeDuplicates(array) {
    var uniqueArray = [...new Set(array)];
    return uniqueArray;
}
