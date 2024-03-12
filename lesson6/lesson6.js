// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = "hello world";
let str2 = "lorem ipsum";
let str3 = "javascript";
console.log(str.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let a = "hello word___lorem ipsum___javascript is cool";
b =a.toUpperCase();
console.log(a.toUpperCase());
console.log(b.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str4 = "  dirty string  ";
console.log(str4.substring(2,str4.length - 2));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

  function stringToArray(str5){
      return str5.split();
  }
      let str5 = 'Ревуть воли як ясла повні';
      let arr = stringToArray(str5);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers= [10, 8, -7, 55, 987, -1011, 0, 10050, 0];
let strings = numbers.map(num =>num.toString());
console.log(strings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let numb=[11, 21, 3];
let direction = "ascending"
let sortNums = (numb,direction) => {
    if (direction === "ascending"){
      return numb.sort((a, b) => a - b);
    }
    if (direction === "descending"){
      return numb.sort((a, b) => b - a);
    }
}
console.log(sortNums(numb,direction));

// - є масив
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
let sort = (coursesArray )=> {
    return coursesArray
        .sort((a, b) => b.monthDuration - a.monthDuration)
        .filter(courses => courses.monthDuration > 5)
        .map((course, index) => ({
            ...course,
            id: index + 1
        }))
}
let rez = sort(coursesAndDurationArray)
console.log(rez)

//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
cardSuit =["spade","diamond","heart","clubs"];
value =["6","7","8","9","10","ace","jack","queen","king"];
let deck = [];
for (const suit of cardSuit) {
    for (const rank of value) {
        deck.push({ suit, rank });
    }
}
let jack = deck.filter(card =>card.rank === "jack" && card.suit ==="clubs" )
console.log(jack)
let all6 = deck.filter(card =>card.rank ==="6");
console.log(all6);
let redCards = deck.filter(card =>card.suit === "heart" || card.suit === "diamond");
console.log( redCards);
let diamonds = deck.filter(card =>card.suit === "diamond");
console.log( diamonds);
let spades = deck.filter(card => card.suit === "spade" && (card.rank >="9" && card.rank <="queen"));
console.log( spades);

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let cards =
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
deck.forEach((card) => {
    if (card.suit === "spade") {
        cards.spades.push(card);
    }   if (card.suit === "diamond") {
        cards.diamonds.push(card);
    }   if (card.suit === "heart") {
        cards.hearts.push(card);
    }   if (card.suit === "clubs") {
        cards.clubs.push(card)
    }
});
console.log(cards)

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let filterCourses = coursesArray.filter(course => course.modules.includes("sass"));
console.log(filterCourses);
let filterCourses1 = coursesArray.filter(course => course.modules.includes("docker"));
console.log(filterCourses1);

