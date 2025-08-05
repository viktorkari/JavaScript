
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.getElementById('block');
let clone = block.cloneNode(true);
// Додаємо стилі
clone.style.backgroundColor = 'lightblue';   // колір фону
clone.style.color = 'darkred';               // колір тексту
clone.style.fontSize = '40px';               // розмір тексту
// Додаємо клон до сторінки
document.body.appendChild(clone);
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let menu = ['Main','Products','About us','Contacts'];
// let ul = document.createElement('ul');
// let li = document.createElement('li');
// document.body.appendChild(ul.appendChild(li));

const menuItems = ['Main', 'Products', 'About us', 'Contacts'];

// Создаём ul
const ul = document.createElement('ul');

// Перебираем массив и создаём li для каждого элемента
menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

// Добавляем ul в body (или в другой контейнер)
document.body.appendChild(ul);
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
coursesAndDurationArray.forEach(course => {
    const div = document.createElement('div');
    div.classList.add('item');

    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = course.title;

    const p = document.createElement('p');
    p.classList.add('description');
    p.textContent = course.monthDuration;

    div.appendChild(h1);
    div.appendChild(p); // ← добавляем <p> внутрь <div>

    document.body.appendChild(div); // ← добавляем <div> в документ
});
// ========================
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// ==========================

// Цикл по массиву
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const course = coursesAndDurationArray[i];

    let div = document.createElement('div');
    div.classList.add('item');

    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = course.title;

    const p = document.createElement('p');
    p.classList.add('description');
    p.textContent = `Duration: ${course.monthDuration} months`;

    div.appendChild(h1);
    div.appendChild(p);

    document.body.appendChild(div);
}
//====================================================//

const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .item {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 16px;
    margin: 12px;
    max-width: 300px;
    transition: transform 0.2s ease;
  }

  .item:hover {
    transform: scale(1.03);
  }

  .heading {
    font-size: 20px;
    margin-bottom: 8px;
    color: #333;
  }

  .description {
    font-size: 16px;
    color: #666;
  }
`;
document.head.appendChild(style);
//=======================================//