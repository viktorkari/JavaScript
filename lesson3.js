// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let array = [];
for (let i = 0; i < 10; i++) {
    array.push(`<div>hay</div>`);
}
for (let item of array) {
    document.write(item);
}
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let index = [];
for (let i = 0; i < 10; i++) {
    index.push(`<div>hay ${i + 1}</div>`);
}
for (let item of index) {
    document.write(item);
}
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let text = [];
for (let i = 0; i < 20; i++) {
    text.push(`<h1>hay</h1>`);
}
for (let item of text) {
    document.write(item);
}
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let index2 = [];
for (let i = 0; i < 20; i++) {
    index2.push(`<h1>hello ${i + 1}</h1>`);
}
let cont = 0;
while (cont < index2.length) {
    document.write(index2[cont]);
    cont++;
}
// – Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру за шаблоном
// Масив:
//     let listOfItems = [‘html’, ‘css’, ‘javascript’, ‘mysql’, ‘mongodb’, ‘react’, ‘angular’, ‘node.js’];
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         і тд інші об’єкти масиву
//     </ul>
// замість ‘ITEM OF ARRAY’ підставити елемент з масиву, щоб вийшов цілий список з даними з масиву
let listOfItems = [`
<ul>
    <li>html</li>
    <li>css</li>
    <li>javascript</li>
    <li>mysql</li>
    <li>mongodb</li>
    <li>react</li>
    <li>angular</li>
    <li>node.js</li>
</ul>`
]
for (let item of listOfItems) {
    document.write(item);
}
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class=”product-card”>
// <h3 class=”product-title”>TITLE. Price – PRICE</h3>
// <img src=”IMAGE” alt=”” class=”product-image”>
// </div>
// Замість TITLE PRICE IMAGE – підставити відповідні поля з об’єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg'
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
    }
];

for (let product of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price – ${product.price} грн</h3>
            <img src="${product.image}" alt="${product.title}" class="product-image">
        </div>
    `);
}
// є масив
// за допомогою циклу вивести:
//
//     – користувачів зі статусом true
//
//  – користувачів зі статусом false
//
//  – користувачів, які старші за 30 років
let x = [
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
for (let item of x) {
    if (item.status === true) {
        document.write(`_
        <div>
             ${item.name}
             ${item.age}
             ${item.status}
        </div>
    `);
    }
}
for (let item of x) {
    if (item.status === false) {
        document.write(`__
        <div>
             ${item.name}
             ${item.age}
             ${item.status}
        </div>
    `);
    }
}
for (let item of x) {
    if (item.age > 30) {
        document.write(`___
        <div>
             ${item.name}
             ${item.age}
             ${item.status}
        </div>
    `);
    }
}
// За допомогою циклу вивести всю інформацію про користувачів, використовуючи шаблон
// за допомогою стилів, побудувати сітку по 2 об’єктах в рядок
document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('usersContainer');
    container.innerHTML = users.map(user => `
                <div class="user-block">
                    <h2>${user.id} – ${user.name} – ${user.username}</h2>
                    <h3>${user.email} – ${user.phone}</h3>
                    <div class="address-block">
                        <p>City – ${user.address.city}</p>
                        <p>Street – ${user.address.street}</p>
                        <p>Suite – ${user.address.suite}</p>
                        <p>Zip code – ${user.address.zipcode}</p>
                    </div>
                </div>
            `).join('');
});

