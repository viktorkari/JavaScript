
// Створити функцію, яка робить глибоку копію об'єкту.
let user = {
    name: 'Viktor',
    age: 25,
    hobbies: ['sport', 'music', 'movies']
};
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
console.log(deepCopy(user));
// Додати перевірки на undefined, null, NaN.
if (user === undefined || user === null) {
    console.warn("Недопустиме значення:", user);
}
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function deepCopyWithMethods(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (typeof value === 'function') {
                copy[key] = value.bind(copy); // зберігаємо функцію
            } else if (typeof value === 'object') {
                copy[key] = deepCopyWithMethods(value); // рекурсивна копія
            } else {
                copy[key] = value; // копіюємо примітив
            }
        }
    }
    return copy;
}
console.log(deepCopyWithMethods(user));
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let transformedArray = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    ...course
}));
console.log(transformedArray);