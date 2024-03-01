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
function array(users) {
    for (const elements of users) {
        console.log(elements)
    }
}
array(users)

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

//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let allNum = [2, 4, 6, 8, 10];
function suma(allNum){
    let res = 0;
    for (let i = 0; i < allNum.length; i++) {
          res += allNum[i];
    }
    return res;
}
let res = suma(allNum);
console.log(res);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let index =[11, 22, 33, 44];
function swap(index) {
    let index1=index[0];
    index[0]=index[1];
    index[1]=index1;

}
swap(index);
console.log(index);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValues =[
    {currency:"USD",value:38},
    {currency:"UAH",value:1},
    {currency:"EUR",value:41}
];
let sumUAH = 250;
function exchange(sumUAN,currencyValues ) {
    for (const currency of currencyValues) {
        let exchangeRate = currency.value
        let result = sumUAH / exchangeRate;
        console.log(result);
    }
}
exchange(sumUAH, currencyValues);
