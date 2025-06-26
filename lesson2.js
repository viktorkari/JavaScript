// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
obj1 = 'title'; obj2 = 'pageCount'; obj3 = 'genre';
console.log(obj1, obj2, obj3);
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
obj1 = 'title';
obj2 = 'pageCount';
obj3 = 'genre';
 authors =[
    name ='vova',
    age = 25
]
console.log(obj1, obj2, obj3, authors);
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
users = [
    obj1={
        name : 'olya',
        username : 'oly',
        password : 20
    },  obj2={
        name : 'olya',
        username : 'oly',
        password : 21
    },  obj3={
        name : 'olya',
        username : 'oly',
        password : 22
    },  obj4={
        name : 'olya',
        username : 'oly',
        password : 23
    },  obj5={
        name : 'olya',
        username : 'oly',
        password : 24
    }
]
console.log(users[0].password,users[1].password,users[2].password,users[3].password,users[4].password);
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
weather = [
    mondey ={
       morning : 12,
       evening : 15,
    },
    tuesday={
        morning : 13,
        evening : 16,
    },
    wednesday={
        morning : 22,
        evening : 25,
    },
    thursday={
        morning : 32,
        evening : 25,
    },
    friday={
        morning : 12,
        evening : 10,
    },
    saturday={
        morning : 12,
        evening : 18,
    },
    sunday={
        morning : 19,
        evening : 15,

    }
]
console.log(weather);
// – Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x =  +prompt('число');
if (x !== 0) {
    console.log(true)
}
else{
    console.log(false)
}
let a = +prompt('a');
if (a === 1 || a === 0  || a === -3) {
    console.log(true)
}
else{
    console.log(false)
}
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).
let time = +(prompt('time'));

if (time >= 0 && time < 15) {
    console.log('first')
}
else if (time >= 15 && time < 30) {
    console.log('second')
}
else if (time >= 30 && time < 45) {
    console.log('third')
}
else if (time >= 45 && time < 60) {
    console.log('fourth')
}
else {
    console.log('error')
}
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +(prompt('day'));
if (day >= 1 && day <= 15) {
    console.log('first')
}
else if (day >= 16 && day <= 30) {
    console.log('second')
}
else if (day >= 31 && day <= 31) {
    console.log('third')
}
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
    let user = +(prompt('день  недели (1-7)'));
    switch (user) {
        case 1:
            console.log('monday');
            break;
        case 2:
            console.log('tuesday');
            break;
        case 3:
            console.log('wednesday');
            break;
        case 4:
            console.log('thursday');
            break;
        case 5:
            console.log('friday');
            break;
        case 6:
            console.log('saturday');
            break;
        case 7:
            console.log('sunday');
            break;
        default:
            console.log('error');
    }
// – Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати, коли введені рівні числа.
let num1 = +(prompt('Введите первое число'));
let num2 = +(prompt('Введите второе число'));
if (num1 === num2) {
    console.log('Числа равны:', num1);
} else if (num1 > num2) {
    console.log('Максимальное число:', num1);
} else {
    console.log('Максимальное число:', num2);
}
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let y = (prompt(''));
if (y === 0 || x === null || x === undefined || x === false) {
    console.log('default')
}
else {
    console.log(x)
}
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.
