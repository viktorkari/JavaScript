
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
let totalLength = 0;
for (let i = 0; i < str.length; i++) {
    totalLength += str[i].length;
}
console.log(totalLength); // Выведет общую длину всех строк
// - Перевести до великого регістру наступні стрінгові значення
let arr = 'hello world' + ', ' + 'lorem ipsum' + ', ' + 'javascript is cool';
console.log(arr.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lover = 'HELLO WORLD' + ', ' + 'LOREM IPSUM' + ', ' + 'JS IS COOL';
console.log(lover.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let brd = ' dirty string   ';
console.log(brd.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let toarray= 'Ревуть воли як ясла повні';
function f(str) {
    return str.split(' ');
}
console.log(f(toarray));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let nums = [10,8,-7,55,987,-1011,0,1050,0];
let mapedUsers = nums.map(value => ({ value: value.toString() }));
console.log(mapedUsers);
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numbers = [11,21,3];
let sortNums = (array, direction) => {
    if (direction === 'ascending') {
        return { array: [...array].sort((a, b) => a - b) };
    } else if (direction === 'descending') {
        return { array: [...array].sort((a, b) => b - a) };
    }
};
console.log(sortNums(numbers, 'ascending'));  // { array: [3, 11, 21] }
console.log(sortNums(numbers, 'descending')); // { array: [21, 11, 3] }
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let courses = coursesAndDurationArray.filter(course =>
    course.monthDuration > 5).map(course =>
    ({ title: course.title, monthDuration: course.monthDuration}));
console.log(courses);

//-----------------------------------------//

let updatedCourses = coursesAndDurationArray.map((value, index) => ({
    id: index + 1,
    title: value.title,
    monthDuration: value.monthDuration
}));
console.log(updatedCourses);

//--------------------------------------------------//


let sortedCourses = coursesAndDurationArray.sort(
    (a, b) => b.monthDuration - a.monthDuration);
console.log(sortedCourses);
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
let cardOptions = {
    cardSuits: ['spade', 'diamond', 'heart', 'clubs'],
    values: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
    suitColors: {
        spade: 'black',
        clubs: 'black',
        diamond: 'red',
        heart: 'red'
    }
};
//++++++++++++++++++++++++++++++++++++++++//
const createDeck = () => {
    let deck = [];
    cardOptions.cardSuits.forEach(suit => {
        cardOptions.values
            .filter(value => value !== 'jack') //  исключаем 'jack'
            .forEach(value => {
                deck.push({
                    suit: suit,
                    value: value,
                    color: cardOptions.suitColors[suit]
                });
            });
    });
    return deck;
};

console.log(createDeck()); //  Колода без 'jack'

//-----------------------------------------//

const sixes = createDeck().filter(card => card.value === '6');
console.log(sixes);

//----------------------------------------//

const hearts = createDeck().filter(card => card.suit === 'heart');
console.log(hearts);

//-----------------------------------------------//

const ace = createDeck().filter(card => card.suit === 'spade'&& card.value === 'ace' );
console.log(ace);

//------------------------------------------//


const red = createDeck().filter(card => card.color === 'red' );
console.log(red);


//----------------------------------------------//

const diamond = createDeck().filter(card => card.suit === 'diamond' );
console.log(diamond);


//----------------------------------------//

const spade = createDeck().filter(card => card.suit === 'spade'&& card.value >= '9' );
console.log(spade);
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }














// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker