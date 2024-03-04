// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

  let  sum = (a,b) => a*b;
  console.log(sum(5, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

  let  area = (r) => Math.PI*Math.pow(r,2);
  console.log(area(8))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

  let  cylinder = (r, h) =>
  2*Math.PI*Math.pow(r,2)+2*Math.PI*r*h;
  console.log(cylinder(5,6));

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = ["js","ts","react"];
  let user = (users) =>{
    for (const element of users) {
      console.log(element)
    }
  }
  user(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

  let  text = (car, bike, tel) =>
    document.write(`<h3>car: ${car}__bike: ${bike}__tel: ${tel}</h3>`);
  text("lada","yamaha","lg");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write("<ul>");
  let doc = (write) =>
  document.write(`<li>car: ${write}__tv: ${write}__lamp: ${write}</li>`);
document.write("</ul>")
  doc("audi");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write("<ul>");
  let  day = (text,number) =>{
      for (let i = 1; i <= number; i++){
        document.write(`<li>1: ${text}__2: ${text}__3: ${text}</li>`);
    }
}
  document.write("<ul>");
  day("friday",3);

  // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const element =[1, "day", true];
  let  people = (element) =>
      document.write(`<h3>element:${element}</h3>`);
  people(element);

  // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const user1 =[
    {
        id:30,
        name:"Viktor",
        age:20
    }
];
  let  indifikator= (user1) =>
    document.write(`<div>id:${user1[0].id}</div>
                    <div>name:${user1[0].name}</div>
                    <div>age:${user1[0].age}</div>`);

  indifikator(user1);

// - створити функцію яка повертає найменьше число з масиву
let  numbers=[7, 4, 6, 8];
let  minNumber = (numbers) => {
    let min = numbers[0];
    for (let minElement of numbers) {
        if (minElement < min) {
            min = minElement
        }
    }
    console.log(min);
}
minNumber(numbers);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let allNum = [2, 4, 6, 8, 10];
let suma = (allNum) => {
    let res = 0;
    for (const allNumElement of allNum) {
        res += allNumElement;
    }
    console.log(res);
}
suma(allNum);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let index =[11, 22, 33, 44];
  let swap =(index) => {
      let index1 = index[0];
      index[0] = index[1];
      index[1] = index1;
  }
swap(index);
console.log(index)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValues =[
    {currency:"USD",value:38},
    {currency:"EUR",value:42}
];
let sumUAH = 250;
  let exchange=(sumUAH,currencyValues) => {
    for (const currency of currencyValues) {
        let exchangeRate = currency.value
        let result = sumUAH / exchangeRate|0;
        let currencyName = currency.currency;
        document.write(`<h3 class="c">250 UAH = ${result} ${currencyName}</h3>`)
    }
}
exchange(sumUAH, currencyValues);