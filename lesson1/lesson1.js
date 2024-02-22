// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a = "hello";
console.log(a);
let b = "owu";
console.log(b);
let c = "com";
console.log(c);
let d = "ua";
console.log(d);
let t = 1;
console.log(t);
let f = 10;
console.log(f);
let j = -999;
console.log(j)
let k= 123;
console.log(k);
let l = 3.14;
console.log(l);
let h = 2.7;
console.log(h);
let o = 16;
console.log(o);
let e = true;
console.log(e);
let s = false;
console.log(s);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Viktor";
let middleName ="Gennadievich";
let lastName = "Karlin";
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let i = 100;
console.log(typeof i);
let w = 100;
console.log(typeof w);
let q = true;
console.log(typeof q);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt("firstName")
let name2 = prompt("middleName")
let age = +prompt("age")
console.log(name,name2,age);



