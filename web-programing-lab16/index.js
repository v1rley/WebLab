//Завдання 1
function showImageSrc(image) {
    alert(image.src);
}

//Завдання 2

function setTitleText() {
    this.setAttribute('title', this.innerText);
}

function removeTitleText() {
    this.removeAttribute('title');
}


const link12 = document.getElementById('link2.1');
const link22 = document.getElementById('link2.2');
const link32 = document.getElementById('link2.3');

    link12.addEventListener('mouseover', setTitleText);
    link22.addEventListener('mouseover', setTitleText);
    link32.addEventListener('mouseover', setTitleText);

    link12.addEventListener('mouseout', removeTitleText);
    link22.addEventListener('mouseout', removeTitleText);
    link32.addEventListener('mouseout', removeTitleText);


//Завдання 3-4
function appendHrefText() {
    this.innerText += " (" + this.getAttribute('href') + ")";
}

function removeHrefText() {
    const text = this.innerText;
    this.innerText = text.substring(0, text.indexOf(' ('));
}

const link13 = document.getElementById('link3.1');
const link23 = document.getElementById('link3.2');
const link33 = document.getElementById('link3.3');

link13.addEventListener('mouseover', appendHrefText);
link23.addEventListener('mouseover', appendHrefText);
link33.addEventListener('mouseover', appendHrefText);

link13.addEventListener('mouseout', removeHrefText);
link23.addEventListener('mouseout', removeHrefText);
link33.addEventListener('mouseout', removeHrefText);
//Завдання 5
const input15 = document.getElementById("input1");
const input25 = document.getElementById("input2");
const input35 = document.getElementById("input3");
const demo = document.getElementById("demo");

input15.addEventListener("blur", function () {
        demo.innerHTML += "Input 1: " + input15.value + "<br>";
    });

input25.addEventListener("blur", function () {
        demo.innerHTML += "Input 2: " + input25.value + "<br>";
    });

input35.addEventListener("blur", function () {
        demo.innerHTML += "Input 3: " + input35.value + "<br>";
    });
//Завдання 6
const input16 = document.getElementById("input6.1");
const input26 = document.getElementById("input6.2");
const input36 = document.getElementById("input6.3");

function showAlert(event) {
        alert(event.target.value);
        event.target.removeEventListener("click", showAlert);
    }

input16.addEventListener("click", showAlert);
input26.addEventListener("click", showAlert);
input36.addEventListener("click", showAlert);
//Завдання 7
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");

function squareNumber() {
    const number = parseInt(this.textContent);
    this.textContent = number * number;
        this.removeEventListener("click", squareNumber);
    }

    number1.addEventListener("click", squareNumber);
    number2.addEventListener("click", squareNumber);
    number3.addEventListener("click", squareNumber);
//Завдання 8
    var inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            const length = input.dataset.length;
            const valueLength = input.value.length;


            if (valueLength == length) {
                input.style.borderColor = 'green';
                console.log('Довжина вірна');
            } else {
                input.style.borderColor = 'red';
                console.log('Довжина невірна');
            }
        });
    });
//Завдання 9
    const divs = document.querySelectorAll('div');
    let prevColor = '';

    function redColor(e) {
        e.target.style.backgroundColor = 'red';
        prevColor = 'red';
        e.target.removeEventListener('click', redColor);
        e.target.addEventListener('click', greenColor);
    }

    function greenColor(e) {
        e.target.style.backgroundColor = 'green';
        prevColor = 'green';
        e.target.removeEventListener('click', greenColor);
        e.target.addEventListener('click', redColor);
    }

    divs.forEach(div => {
        div.addEventListener('click', redColor);
    });