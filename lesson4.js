
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = function (a, b) {
    if (arguments.length === 1) {
        return a; // Возвращаем значение, если передан один аргумент
    }
    let result = a * b;
    return area(result); // Теперь это имеет смысл, так как мы обрабатываем случай с одним аргументом
}
console.log(area(10, 20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let arean = function (a, b) {
    if (arguments.length === 1) {
        return a;
    }
    let result = a * b * Math.PI;
    return arean(result);
}
console.log(arean(5,5, Math.PI));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let are = function (a, b, c) {
    if (arguments.length === 1) {
        return a;
    }
    let result = a * b * c * Math.PI;
    return are(result);
}
console.log(are(2,10, 200, Math.PI));
// - створити функцію яка приймає масив та виводить кожен його елемент
const courses = [
    {title: 'JavaScript', monthDuration: 5},
    {title: 'Python', monthDuration: 4},
    {title: 'Java', monthDuration: 6},
    {title: 'React', monthDuration: 3}
];
function coursesAndDurationArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Курс №${i + 1}:`);
        console.log(`Название: ${arr[i].title}`);
        console.log(`Продолжительность: ${arr[i].monthDuration} месяцев`);
        console.log('------------------------');
    }
}
coursesAndDurationArray(courses);
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function createListi(text) {
    const list = `
        <p>${text}</p>
    `;
    document.write(list);
}
createListi('jessica');
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function createList(text) {
    const list = `
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `;
    document.write(list);
}
createList('Пример текста');
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function createListli(text, count) {
    // Проверка параметров
    if (!count || count <= 0) {
        count = 1; // значение по умолчанию, если count не указан или некорректен
    }
    let listHTML = '<ul>';
    // Создаем необходимое количество li элементов
    for (let i = 0; i < count; i++) {
        listHTML += `<li>${text}</li>`;
    }
    listHTML += '</ul>';
    document.write(listHTML);
}
createListli('jessi', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write










// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.




// - створити функцію яка повертає найменьше число з масиву



// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]





// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
