function myFunc() {
    alert("Приклад виклику функції із підключеного файлу index.js");
}

function myFunc2() {
    let name = prompt('Як тебе звати?', "Ім'я");
    alert(`Тебе звати ${name}!`);

}

function myFunc3() {
    let a = confirm("ти вошол в аккаут?");
    if (a === true) {
        alert('Поздравляю ти війшов в аккаунт!');
    } else {
        alert("Ввійди")
    }
}

function myFunc4() {
    let n = 2;
    while (n <= 100) {
        let isPrime = true;
        let i = 2;
        while (i <= Math.sqrt(n)) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
            i++;
        }
        if (isPrime) {
            console.log(n);
        }
        n++;
    }
}

function myFunc5() {
    let num = 0;
    do {
        if (num === 0) {
            console.log(num + " - це нуль");
        } else if (num % 2 === 0) {
            console.log(num + " - парне число");
        } else {
            console.log(num + " - непарне число");
        }
        num++;
    } while (num <= 10);
}

function myFunc6() {
    let numb = 10000;
    let result = numb;
    let counter = 0;

    while (result >= 50) {
        result = result / 2;
        counter++;
    }

    console.log("Отримане число: " + result); // виведе "Отримане число: 39.0625"
    console.log("Кількість ітерацій: " + counter); // виведе "Кількість ітерацій: 7"

}

function myFunc7() {
    let month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"));

    if (month >= 1 && month <= 12) {
        let season, monthName;
        switch (Math.floor((month - 1) / 3)) {
            case 0:
                season = "зима";
                break;
            case 1:
                season = "весна";
                break;
            case 2:
                season = "літо";
                break;
            default:
                season = "осінь";
        }
        switch (month) {
            case 1:
                monthName = "січень";
                break;
            case 2:
                monthName = "лютий";
                break;
            case 3:
                monthName = "березень";
                break;
            case 4:
                monthName = "квітень";
                break;
            case 5:
                monthName = "травень";
                break;
            case 6:
                monthName = "червень";
                break;
            case 7:
                monthName = "липень";
                break;
            case 8:
                monthName = "серпень";
                break;
            case 9:
                monthName = "вересень";
                break;
            case 10:
                monthName = "жовтень";
                break;
            case 11:
                monthName = "листопад";
                break;
            default:
                monthName = "грудень";
        }
        alert(monthName + " , " + season + ".");
    } else {
        alert("Введене число не є номером місяця.");
    }
}
function myFunc8() {
    let celsiusTemp = prompt("Введите температуру по Цельсию:");
    let fahrenheitTemp = (9/5) * celsiusTemp + 32;
    alert("Температура по Фаренгейту: " + fahrenheitTemp);
}
function myFunc9() {
    let dayNumber = prompt("Введіть число от 1 до 7:");
    let dayName;
    switch (dayNumber) {
        case '1':
            dayName = 'Понеділок';
            break;
        case '2':
            dayName = 'Вівторок';
            break;
        case '3':
            dayName = 'Середа';
            break;
        case '4':
            dayName = 'Четвер';
            break;
        case '5':
            dayName = 'Пятниця';
            break;
        case '6':
            dayName = 'Субота';
            break;
        case '7':
            dayName = 'Неділя';
            break;
        default:
            dayName = 'Некорректный ввод';
    }
    console.log(`День тижня: ${dayName}`);
}