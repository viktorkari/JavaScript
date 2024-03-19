// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести
// об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.createElement("form");
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";
nameInput.name = "userName";
form.appendChild(nameInput);
let surnameInput = document.createElement("input");
surnameInput.type = "text";
surnameInput.placeholder = "Surname";
surnameInput.name = "userSurname";
form.appendChild(surnameInput);
let ageInput = document.createElement("input");
ageInput.type = "text";
ageInput.placeholder = "Age";
ageInput.name = "userAge";
form.appendChild(ageInput);
let button = document.createElement("button");
button.innerText = "Send";
form.appendChild(button);
document.body.appendChild(form);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let userName = form.elements["userName"].value;
    let userSurname = form.elements["userSurname"].value;
    let userAge = form.elements["userAge"].value;
    let userInfoDiv = document.createElement("div");
    userInfoDiv.textContent = `Ім'я: ${userName} | Прізвище: ${userSurname} | Вік: ${userAge}`;
    document.body.appendChild(userInfoDiv);
    form.reset();
});

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let div = document.createElement("div");
div.innerText = "1"
document.body.appendChild(div)
let currentNumber = parseInt(localStorage.getItem("number")) || 0;
let newNumber = currentNumber + 1;
div.innerText = newNumber;
localStorage.setItem("number", newNumber);

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

document.addEventListener("DOMContentLoaded", function() {
    let currentDate = new Date();
    let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
    sessions.push(currentDate);
    localStorage.setItem("sessions", JSON.stringify(sessions));
});
document.addEventListener("DOMContentLoaded", function() {
    let storedSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    let sessionsInfoDiv = document.createElement("div");
    sessionsInfoDiv.id = "sessionsInfo";
    document.body.appendChild(sessionsInfoDiv);

    storedSessions.forEach(function (session, index) {
        let sessionDiv = document.createElement("div");
        sessionDiv.textContent = "Session" + (index + 1) + ": " + session;
        sessionsInfoDiv.appendChild(sessionDiv);
    });
});

//     зробити масив на 100 об'єктів та дві кнопки prev next// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів// При натисканні prev виводяться попередні 10 об'єктів
document.addEventListener("DOMContentLoaded", function () {
    const data = generateData(100);
    function generateData(count) {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({id: i, name: `Обьєкт ${i}`});
        }
        return data;
    }
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    button1.innerText = "next";
    button2.innerText = "prev";
    document.body.appendChild(button2);
    document.body.appendChild(button1);
    let objectsContainer = document.createElement("div");
    objectsContainer.id = "objectsContainer";
    document.body.appendChild(objectsContainer);
    function renderObjects(startIndex, endIndex) {
        let container = document.getElementById("objectsContainer");
        container.innerHTML = "";
        for (let i = startIndex; i < endIndex; i++) {
            if (i < data.length) {
                let objDiv = document.createElement("div");
                objDiv.textContent = data[i].name;
                container.appendChild(objDiv);
            }
        }
    }
    let startIndex = 0;
    let endIndex = 10;
    renderObjects(startIndex, endIndex);
    function next() {
        startIndex += 10;
        endIndex += 10;
        renderObjects(startIndex, endIndex);
    }
    function prev() {
        startIndex -= 10;
        endIndex -= 10;
        renderObjects(startIndex, endIndex);
    }
    button2.addEventListener("click", prev);
    button1.addEventListener("click", next);
});

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на
// кнопку зникав елемент з id="text".

let text = document.createElement("div");
text.id = "text";
let image = document.createElement("img");
image.src = "https://w7.pngwing.com/pngs/85/413/png-transparent-mario-sonic-at-the-rio-2016-olympic-games-mario-sonic-at-the-olympic-" +
    "games-amy-rose-sonic-adventure-2-sonic-the-hedgehog-rio-video-game-cartoon-fictional-character-thumbnail.png";
image.alt = "Зображення";
text.appendChild(image);
let click = document.createElement("button");
click.id = "hideButton";
click.textContent = "Приховати елемент";
document.body.appendChild(text);
document.body.appendChild(click);
let textElement = document.getElementById("text");
let hideButton = document.getElementById("hideButton");
hideButton.addEventListener("click", function () {
    if (textElement) {
        textElement.remove();
    } else {
        console.log("Елемент не існує");
    }
});

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageINput = document.createElement("input");
ageINput.type = "number";
ageINput.placeholder = "Введіть ваш вік";
document.body.appendChild(ageINput);
let confirmButton = document.createElement("button");
confirmButton.textContent = "Підтвердити";
document.body.appendChild(confirmButton);
confirmButton.addEventListener("click", function () {
    let age = parseInt(ageINput.value);
    if (age < 18) {
        alert("Ваш вік менший за 18,Ви не можете виконувати цю дію");
    } else {
        alert("Ваш вік достатній для виконання цієї дії");
    }
});

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let rowsInput = document.createElement("input");
rowsInput.type = "number";
rowsInput.placeholder = "Кількість рядків";
document.body.appendChild(rowsInput);
let colsInput = document.createElement("input");
colsInput.type = "number";
colsInput.placeholder = "Кількість стовпців";
document.body.appendChild(colsInput);
let contentInput = document.createElement("input");
contentInput.type = "text";
contentInput.placeholder = "Вміст ячейок";
document.body.appendChild(contentInput);
let createTableButton = document.createElement("button");
createTableButton.textContent = "Створити таблицю";
document.body.appendChild(createTableButton);
let tableContainer = document.createElement("div");
document.body.appendChild(tableContainer);
createTableButton.addEventListener("click", function () {
    let numRows = parseInt(rowsInput.value);
    let numCols = parseInt(colsInput.value);
    let cellContent = contentInput.value;
    let table = document.createElement("table");
    for (let i = 0; i < numRows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < numCols; j++) {
            let cell = row.insertCell();
            cell.textContent = cellContent;
        }
    }
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
});

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

document.addEventListener("DOMContentLoaded", function() {
    let priceBlock = document.createElement("div");
    priceBlock.textContent = "100грн";
    document.body.appendChild(priceBlock);
    let reloadButton = document.createElement("button");
    reloadButton.textContent = "Перезавантажити сторінку";
    document.body.appendChild(reloadButton);
    function updatePrice() {
        let lastUpdate = parseInt(localStorage.getItem("lastUpdate"));
        let currentTime = Date.now();
        if (!isNaN(lastUpdate)) {
            if ((currentTime - lastUpdate) > 10000) {
                let currentPrice = parseInt(priceBlock.textContent);
                let newPrice = currentPrice + 10;
                priceBlock.textContent = newPrice + "грн";
                localStorage.setItem("lastUpdate", currentTime.toString());
            }
        } else {
            localStorage.setItem("lastUpdate", currentTime.toString());
        }
    }
    reloadButton.addEventListener("click", function() {
        updatePrice();
    });
});
