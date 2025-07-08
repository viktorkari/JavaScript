// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//--------------------------------------------------------------------------------------------------------//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let arean = (a, b) => a * b;
console.log(arean(10,20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let are = (a, b, c) => a * b * c;
console.log(are(5,5,5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let area = (a, b, c) => a * b * c * Math.PI;
console.log(area(2,10,20));
// - створити функцію яка приймає масив та виводить кожен його елемент
let courses = [
    {title: 'JavaScript', monthDuration: 5},
    {title: 'Python', monthDuration: 4},
    {title: 'Java', monthDuration: 6},
];
let coursesAndDurationArray = (arr) => {
    arr.forEach(course => {
        console.log(`${course.title} - ${course.monthDuration} month`);
    });
};
coursesAndDurationArray(courses);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createList = (text) => {
    const list = `
         <p>${text}</p>
    `;
    document.write(list);
}
createList('jessica')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createListli = (text) => {
    const list = `
         <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
         </ul>
    `;
    document.write(list);
}
createListli('jessi');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createListlist = (text, count) => {
    let list = '<ul>';
    for (let i = 0; i < count; i++) {
        list += `<li>${text}</li>`;
    }
    list += '</ul>';
    document.write(list);
};
createListlist('jessi', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createArr = (number, string, boolean) => {
    let list = '<ul>';
    list += `<li>${number}</li>`;
    list += `<li>${string}</li>`;
    list += `<li>${boolean}</li>`;
    list += '</ul>';
    document.write(list);
}
createArr(5, 'jessi', true);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let people = [
    {id: 1, name: 'jessi', age: 26},
    {id: 2, name: 'ivi', age: 25},
    {id: 3, name: 'Masha', age: 30}
];
let displayObjects = (arrayOfObjects) => {
    const container = document.createElement('div');
    container.className = 'objects-container';

    arrayOfObjects.forEach(obj => {
        const block = document.createElement('div');
        block.id = 'obj';
        block.innerHTML = `
            <p><strong>ID:</strong> ${obj.id}</p>
            <p><strong>Name:</strong> ${obj.name}</p>
            <p><strong>Age:</strong> ${obj.age}</p>
        `;
        container.appendChild(block); // добавляем блок в контейнер
    });
    document.body.appendChild(container); // добавляем контейнер на страницу
};
displayObjects(people);

// - створити функцію яка повертає найменьше число з масиву
let findMinNumber = (array) => {
    if (!array || array.length === 0) {
        return null;
    }
    return Math.min(...array);
}
const numbers = [5, 2, 9, 7, 6, 3];
console.log(findMinNumber(numbers));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumFor = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sumFor([1, 2, 10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    const result = [...arr];
    const [temp] = result.splice(index1, 1, result[index2]);
    result.splice(index2, 1, temp);
    return result;
}
console.log (swap([11,22,33,44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const result = [...currencyValues];
    const [temp] = result.splice(result.findIndex(item => item.currency === exchangeCurrency), 1, result[0]);
    result.splice(0, 1, temp);
    return sumUAH * result[0].value;
}
const currencies = [
    {currency: 'USD', value: 25},
    {currency: 'EUR', value: 42},
];
console.log(exchange(10000, currencies, 'USD'));
console.log(exchange(10000, currencies, 'EUR'));



