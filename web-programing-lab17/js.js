function getCurrentTime() {
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];

    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const dayOfWeek = days[now.getDay()];
    const dayOfMonth = now.getDate().toString().padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const timeString = `${hours}:${minutes}:${seconds}, ${dayOfWeek}, ${dayOfMonth} ${month} ${year} року`;

    console.log(timeString);
    return timeString;
}

let playing;
function play(){
    playing = true;
    console.log(123)
    while (playing) {
        let randomNumber = Math.floor(Math.random() * 101);
        let attempts = 0;

        console.log("Я загадав число від 0 до 100. Спробуйте вгадати!");

        while (true) {
            let guess = prompt("Введіть число:");

            if (guess === null) {
                console.log("Гра відмінена.");
                break;
            }

            guess = Number(guess);

            if (isNaN(guess) || guess < 0 || guess > 100) {
                console.log("Введіть число від 0 до 100!");
                continue;
            }

            attempts++;

            if (guess === randomNumber) {
                console.log(`Вітаю! Ви вгадали число за ${attempts} спроб!`);
                break;
            } else {
                let message = "";
                let difference = Math.abs(guess - randomNumber);

                if (difference >= 50) {
                    message = "Дуже холодно!";
                } else if (difference >= 30) {
                    message = "Холодно!";
                } else if (difference >= 10) {
                    message = "Тепло!";
                } else if (difference >= 5) {
                    message = "Дуже тепло!";
                } else {
                    message = "Гаряче!";
                }

                console.log(`${new Date().toLocaleString()} Спроба ${attempts}: число ${guess} – не вірно. ${message}`);
            }
        }

        let playAgain = confirm("Хочете зіграти ще раз?");

        if (!playAgain) {
            console.log("Дякую за гру!");
            playing = false;
        }
    }
}

