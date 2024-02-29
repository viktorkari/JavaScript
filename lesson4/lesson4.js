// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sum(a,b) {
    return a*b;
}
let result = sum(2,4);
console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function area(r) {
    return  Math.PI*Math.pow(r,2);
}
let calc = area(8);
console.log(calc);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(r,h) {
    let a=2*Math.PI*Math.pow(r,2);
    let b=2*Math.PI*r*h;
    return a+b;
}
let cylinderArea = cylinder(5,6);
console.log(cylinderArea);

// - створити функцію яка приймає масив та виводить кожен його елемент

let users=["js","html","react","ts"]
function array() {
    for (const elements of users) {
        console.log(elements)
    }
}
array()

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text(day,car,bike) {
    document.write (`<div class="a">
<h3>day:${day} car:${car} bike:${bike}</h3>
</div>`);
}
text("sunday", "bmw", "honda");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write("<ul>");
function element(text) {
    document.write (`<li class="b">lamp:${text} tel:${text} tv:${text}</li>`);
}
document.write("</ul>");
element("samsung");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write("<ul>");
function any(texting,number) {
    for (let i = 1; i <= number; i++) {
        document.write(`<li class="b">car:${texting} number:${i} car2:${texting}</li>`);
    }
}
document.write("</ul>");
any("audi",3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let primitiv = [1,"string",true];
function list(primitiv) {
    document.write(`<h3>primitive:${primitiv}</h3>`);
}
list(primitiv);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let user =[{
    id: 20,
    name: "viktor",
    age: 30
}]
function information (user){
    document.write(`<div>id:${user[0].id}</div>
                    <div>name:${user[0].name}</div>
                     <div>age:${user[0].age}</div>`);
}
information(user);

// - створити функцію яка повертає найменьше число з масиву

let numbers=[2, 4, 6, 8, 10];
function minNumber(numbers){
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    return min;
}
minNumber(numbers);
let minimum= minNumber(numbers);
console.log(minimum);


