// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let books = [
    {
        book1: "sky",
        book2: "water",
        book3: "sand",
        book4: "sea",
        book5: "ocean",
        book6: "palm trees",
        book7: "Sun",
        book8: "dolphin",
        book9: "journey",
        book10: "shark"
    }
]
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    document.write(`<div>${book.book1}</div>
                    <div>${book.book2}</div>
                    <div>${book.book3}</div>
                    <div>${book.book4}</div>
                    <div>${book.book5}</div>
                    <div>${book.book6}</div>
                    <div>${book.book7}</div>
                    <div>${book.book8}</div>
                    <div>${book.book9}</div>
                    <div>${book.book10}</div>`)
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let travel = [
    {
        travel1: "boat",
        travel2: "elephant",
        travel3: "monkey",
        travel4: "horse",
        travel5: "ship",
        travel6: "airplane",
        travel7: "buggy",
        travel8: "cockatoo",
        travel9: "harek",
        travel10: "snake",
    }
]
for (let i = 0; i < travel.length; i++) {
    const journey = travel[i];
    document.write(`<div>${i++}:${journey.travel1}</div>
                    <div>${i++}:${journey.travel2}</<div>
                    <div>${i++}:${journey.travel3}</<div>
                    <div>${i++}:${journey.travel4}</<div>
                    <div>${i++}:${journey.travel5}</<div>
                    <div>${i++}:${journey.travel6}</<div>
                    <div>${i++}:${journey.travel7}</<div>
                    <div>${i++}:${journey.travel8}</<div>
                    <div>${i++}:${journey.travel9}</<div>
                    <div>${i++}:${journey.travel10}</<div>`)

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let cars = [
    {
        car1: "vw", car2: "mers", car3: "audi", car4: "lada", car5: "kia",
        car6: "nisan", car7: "reno", car8: "porse", car9: "bmw", car10: "bugati",
        car11: "maserati", car12: "bentley", car13: "infiniti", car14: "ford", car15: "opel",
        car16: "chevrole", car17: "mustang", car18: "mitsubisi", car19: "corvete", car20: "juk",
    }
]
let i = 0;
while (i < cars.length) {
    const car = cars[i];
    document.write(`<h1>${car.car1}</h1><h1>${car.car2}</h1><h1>${car.car3}</h1>
                    <h1>${car.car4}</h1><h1>${car.car5}</h1><h1>${car.car6}</h1>
                    <h1>${car.car7}</h1><h1>${car.car8}</h1><h1>${car.car9}</h1>
                    <h1>${car.car10}</h1><h1>${car.car11}</h1><h1>${car.car12}</h1>
                    <h1>${car.car13}</h1><h1>${car.car14}</h1><h1>${car.car15}</h1>
                    <h1>${car.car16}</h1><h1>${car.car17}</h1><h1>${car.car18}</h1>
                    <h1>${car.car19}</h1><h1>${car.car20}</h1>`)
    document.write(`<h1>${i++}:${car.car1}</h1><h1>${i++}:${car.car2}</h1><h1>${i++}:${car.car3}</h1>
                    <h1>${i++}:${car.car4}</h1><h1>${i++}:${car.car5}</h1><h1>${i++}:${car.car6}</h1>
                    <h1>${i++}:${car.car7}</h1><h1>${i++}:${car.car8}</h1><h1>${i++}:${car.car9}</h1>
                    <h1>${i++}:${car.car10}</h1><h1>${i++}:${car.car11}</h1><h1>${i++}:${car.car12}</h1>
                    <h1>${i++}:${car.car13}</h1><h1>${i++}:${car.car14}</h1><h1>${i++}:${car.car15}</h1>
                    <h1>${i++}:${car.car16}</h1><h1>${i++}:${car.car17}</h1><h1>${i++}:${car.car18}</h1>
                    <h1>${i++}:${car.car19}</h1><h1>${i++}:${car.car20}</h1>`)


    i++
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write("<ul>")
for (const listOfItem of listOfItems) {
    document.write(`
        <li>${listOfItem}</li>`)
}
document.write("</ul>")

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}:${product.price}</h3>
        <img src=${product.image} alt="product" class="product-image">
    </div>`)
}

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let j = 0; j < users.length; j++) {
    const user = users[j];
if (user.status === false){
    console.log(user)
}if (user.status === true){
    console.log(user)
}if (user.age >30){
    console.log(user)
    }
}






