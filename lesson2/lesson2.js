// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let elements = [1,2,33,44,55,"a","bc","df",true,false];
console.log(elements);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book={
    title: "sun",
    pageCount: 200,
    genre: "relax"
};
console.log(book);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let read={
    title: "sea",
    pageCount: 100,
    genre: "adventures",
    authors: [{
        name: "Artur",
        age: 32
    },
        {
         name: "Oleg",
         age: 20
        }
    ]
}
console.log(read);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users=[
    {name: "Valera", username: "Hlonal", password: 4566},
    {name: "Val", username: "Dasctop", password: 4564},
    {name: "lera", username: "Lamptop", password: 2568},
    {name: "Igor", username: "Mario", password: 2584},
    {name: "Vera", username: "Frankin", password: 5489},
    {name: "Valik", username: "Hlontoik", password: 5698},
    {name: "Rima", username: "lionov", password: 8964},
    {name: "Jack", username: "Frewood", password: 4019},
    {name: "Rio", username: "Karlson", password: 5876},
    {name: "Sam", username: "Small", password: 8965},
    ];
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password,
    users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 10;
if (x !== 0) {
    console.log(true)
}else {
    console.log(false)
}

let a = (1);
switch (a){
    case 1:
        console.log(true);
        break;
    case 0:
        console.log(false);
        break;
    case -3:
        console.log(false);
        break;
    default:
        console.log(NaN)
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 40;
if (time >0&&time<=15){
   console.log(1);
}else if(time >15&&time<=30){
    console.log(2);
}
 else if(time>30&&time<=45){
     console.log(3);
}
 else if (time>45&&time<=59){
     console.log(4);
}
else {
    console.log(NaN)
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 20;
if (day>=1&&day<=10){
    console.log(1);
}else if (day>10&&day<=20){
    console.log(2);
}else if (day>20&&day<=31){
    console.log(3);
}else {
    console.log(NaN);
}

// - Скласти розклад на тиждень за допомогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let schedule = prompt("day of week")
 switch (schedule){
    case "1":
        console.log("go to work");
        break
    case "2":
        console.log("party");
        break
     case "3":
         console.log("hangover");
         break
     case "4":
         console.log("gym");
         break
     case "5":
         console.log("purchases");
         break
     case "6":
         console.log("cooking");
         break
     case "7":
         console.log("relax");
         break
     default:
         console.log(NaN);
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.


let userNumber= {
    num1:2,
    num2:4
}
    if (userNumber.num1 <= userNumber.num2){
    console.log(userNumber.num2);
}else {
    console.log(NaN);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)


let f;
f = f || "default";
console.log(f);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
// на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration>5){
    console.log("Super");
}if(coursesAndDurationArray[1].monthDuration>5){
    console.log("Super");
}if(coursesAndDurationArray[2].monthDuration>5){
    console.log("Super");
}if(coursesAndDurationArray[3].monthDuration>5){
    console.log("Super");
}if(coursesAndDurationArray[4].monthDuration>5){
    console.log("Super");
}if(coursesAndDurationArray[5].monthDuration>5){
    console.log("Super");
}





