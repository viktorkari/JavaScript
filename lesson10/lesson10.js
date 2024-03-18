
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

document.createElement("div");
div.id = "sessionsInfo";
let currentDate = new Date();
let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
sessions.push(currentDate);
localStorage.setItem("sessions", JSON.stringify(sessions));
let storedSessions = JSON.parse(localStorage.getItem("sessions")) || [];
let sessionsInfoDiv = document.getElementById("sessionsInfo");
storedSessions.forEach(function (session, index) {
    let sessionDiv = document.createElement("div");
    sessionDiv.textContent = "Session" + (index + 1) + ': ' + session;
    sessionsInfoDiv.appendChild(sessionDiv);
});

//     зробити масив на 100 об'єктів та дві кнопки prev next// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів// При натисканні prev виводяться попередні 10 об'єктів

let arr = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipisicing", "elit.", "Alias", "aliquam", "aspernatur",
    "cumque,", "debitis", "doloremque", "ea", "error,", "eveniet", "expedita", "explicabo", "ipsa", "ipsum", "obcaecati", "odit",
    "officiis", "pariatur", "possimus,", "quas", "rem", "repellat", "similique", "sit", "sunt", "tenetur", "ut", "voluptatum!", "Animi",
    "aperiam", "asperiores", "assumenda", "consectetur", "culpa", "cum", "distinctio", "dolore", "doloremque", "dolorum", "ea", "eos",
    "expedita,", "fugit", "illo", "impedit", "incidunt", "inventore", "ipsa", "ipsum", "itaque", "molestias", "mollitia", "natus",
    "necessitatibus", "nesciunt", "nisi", "nobis", "non", "nulla", "officia", "officiis", "optio", "placeat", "possimus", "recusandae",
    "repellendus", "sapiente", "sequi", "tempora", "ut", "voluptas", "voluptatum.", "Adipisci", "doloremque", "facere", "fuga", "id", "itaque",
    "nostrum", "quisquam", "suscipit", "veritatis!", "Accusantium", "consectetur", "dolorem", "doloribus", "ducimus", "iure", "natus", "nemo",
    "nesciunt", "nihil", "vero",];
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
        if (i < arr.length) {
            let objDiv = document.createElement("div");
            objDiv.textContent = arr[i];
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

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на
// кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
