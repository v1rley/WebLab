var timerElement = document.getElementById("timer");
var gameCells = document.getElementsByClassName("game-cell");
var restartButton = document.getElementById("restart-button");

var selectedNumbers = [];
var correctSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var isGameActive = false;
var timer;
var numbers;
var gameTable;

for (var i = 1; i <= 20; i++) {
    numbers.push(i);
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(numbers);
for (var i = 0; i < 5; i++) {
    var row = gameTable.insertRow();
    for (var j = 0; j < 5; j++) {
        var cell = row.insertCell();
        cell.textContent = numbers[i * 5 + j];
        cell.style.fontSize = Math.floor(Math.random() * 6 + 15) + "px";
        cell.style.color = generateRandomColor();
        cell.onclick = function() {
            selectNumber(this);
        };
    }
}
// Генерування різних розмірів шрифту і кольорів
function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Оновлення стилів елементів гри
function updateGameCellStyles() {
    for (var i = 0; i < gameCells.length; i++) {
        var style = generateRandomStyle();
        gameCells[i].style.fontSize = style.fontSize;
        gameCells[i].style.color = style.color;
    }
}

// Перевірка послідовності вибраних чисел
function checkSequence() {
    for (var i = 0; i < selectedNumbers.length; i++) {
        if (selectedNumbers[i] !== correctSequence[i]) {
            alert("Не вірна цифра");
            resetGame();
            return;
        }
    }

    if (selectedNumbers.length === correctSequence.length) {
        alert("Ви виграли!");
        resetGame();
    }
}

// Оновлення таймера
function updateTimer() {
    var time = parseInt(timerElement.innerText);

    if (time === 0) {
        alert("Час вийшов!");
        resetGame();
    } else {
        timerElement.innerText = (time - 1).toString();
    }
}

// Скидання гри
function resetGame() {
    clearInterval(timer);
    selectedNumbers = [];
    isGameActive = false;
    timerElement.innerText = "60";

    for (var i = 0; i < gameCells.length; i++) {
        gameCells[i].classList.remove("selected");
    }
}

// Обробник кліків по клітинкам гри
function handleCellClick() {
    if (!isGameActive) return;

    var number = parseInt(this.innerText);

    if (selectedNumbers.includes(number)) {
        alert("Ця цифра вже вибрана");
        return;
    }

    selectedNumbers.push(number);
    this.classList.add("selected");

    checkSequence();
}

// Початок гри
function startGame() {
    isGameActive = true;
    updateGameCellStyles();

    for (var i = 0; i < gameCells.length; i++) {
        gameCells[i].addEventListener("click", handleCellClick);
    }

    timer = setInterval(updateTimer, 1000);
}

// Обробник кліку по кнопці перезапуску
restartButton.addEventListener("click", resetGame);

// Початок гри при завантаженні сторінки
startGame();
