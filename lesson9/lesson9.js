
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement("div");
div.innerText = "TEXT";
div.className = "wrap collapse alpha beta";
document.body.appendChild(div);
div.style.background = "black";
div.style.color = "red";
div.style.fontSize = "40px";
div.style.width = "8%";
let clonedDiv = div.cloneNode(true);
document.body.appendChild(clonedDiv);

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let menuItems = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement("ul");
menuItems.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
})
document.body.appendChild(ul);

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let div1 = document.createElement("div");
coursesAndDurationArray.forEach(item => {
    let innerDiv = document.createElement("div");
    innerDiv.innerText = (`${item.title}  (${item.monthDuration} місяців)`);
    div1.appendChild(innerDiv);
});
document.body.appendChild(div1);

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let div2 = document.createElement("div");
div2.className = "item";
coursesAndDurationArray.forEach(item =>{
    let h1 = document.createElement("h1");
    h1.className = "heading";
    h1.innerText = item.title;
    let p = document.createElement("p");
    p.className = "description";
    p.innerText = item.monthDuration;
    div2.appendChild(h1);
    div2.appendChild(p);
});
document.body.appendChild(div2);

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
simpsons.forEach(person => {
    let memberDiv = document.createElement("div");
    memberDiv.className = "member";
    memberDiv.innerHTML =
       `<h2>${person.name} ${person.surname}</h2>
        <p>Вік: ${person.age}</p>
        <p>${person.info}</p>
        <img src="${person.photo}" alt="${person.name} ${person.surname}">`;
    document.body.appendChild(memberDiv);
});

// Цикл в цикл
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами

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
coursesArray.forEach(course => {
    let courseDiv = document.createElement('div')
    let titleDiv = document.createElement('div');
    titleDiv.style.marginTop = "4%"
    titleDiv.style.border = "5px solid blue"
    titleDiv.style.padding = "10px"
    titleDiv.style.marginBottom = "10px"
    titleDiv.style.fontSize = "50px"
    titleDiv.style.textAlign = "center"
    let durationDiv = document.createElement('div');
    durationDiv.style.fontSize = "40px"
    durationDiv.style.border = "5px solid blue"
    durationDiv.style.padding = "10px"
    durationDiv.style.textAlign = "center"
    durationDiv.style.width = "32%"
    durationDiv.style.marginBottom = "10px"
    let hourDiv = document.createElement('div');
    hourDiv.style.fontSize = "40px"
    hourDiv.style.border = "5px solid blue"
    hourDiv.style.padding = "10px"
    hourDiv.style.textAlign = "center"
    hourDiv.style.width = "62.8%"
    hourDiv.style.marginBottom = "10px"
    hourDiv.style.marginLeft = "35%"
    hourDiv.style.marginTop = "-86px"
    let modulesDiv = document.createElement('div');
    modulesDiv.style.border = "5px solid blue"
    modulesDiv.style.padding = "10px"
    modulesDiv.style.marginBottom = "10px"
    modulesDiv.style.fontSize = "50px"
    modulesDiv.style.textAlign = "center"
    titleDiv.textContent = `${course.title}`;
    durationDiv.textContent = `${course.monthDuration}`;
    hourDiv.innerText = `${course.hourDuration}`;
    let modulesList = document.createElement('ul');
    modulesList.style.marginBottom = "-4%"
    course.modules.forEach(module => {
        let moduleItem = document.createElement('h6');
        moduleItem.style.width = "95%"
        moduleItem.style.border = "5px solid blue"
        moduleItem.style.height = "25%"
        moduleItem.textContent = module;
        moduleItem.style.marginTop = "-40px"
        modulesList.appendChild(moduleItem);
    });
    modulesDiv.appendChild(modulesList);
    courseDiv.appendChild(titleDiv);
    courseDiv.appendChild(durationDiv);
    courseDiv.appendChild(hourDiv);
    courseDiv.appendChild(modulesDiv);
    document.body.appendChild(courseDiv);
});
