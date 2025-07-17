// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email
class User {
    constructor(id, name, surname, email) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// Створення порожнього масиву
let usersLan = [];

// Наповнення масиву 10 об'єктами
for (let i = 0; i < 10; i++) {
    usersLan.push(new User(
        i,
        `name${i}`,
        `surname${i}`,
        `user${i}@example.com`
    ));
}
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let users2 = usersLan.filter(user => user.id % 2 === 0);
 console.log(users2);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let users3 = usersLan.sort((a, b) => a.id - b.id);
console.log(users3)
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [];
for (let i = 0; i < 10; i++) {
    clients.push(new Client(
        i,
        `name${i}`,
        `surname${i}`,
        `user${i}@example.com`,
        `phone${i}`,
        `order${i}`
    ))
}
console.log(clients);
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clients2 = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clients2);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = null;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }
    info() {
        console.log(`Модель: ${this.model}, Виробник: ${this.manufacturer}, Рік: ${this.year}, Об'єм: ${this.volume}`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }
    changeYear(newYear) {
        this.year = newYear;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
// Створення масиву машин
let cars = [];

for (let i = 0; i < 10; i++) {
    let car = new Car(
        `Model${i}`,
        `Manufacturer${i}`,
        2000 + i,
        180 + i * 5,
        1.6 + i * 0.1
    );
    car.addDriver({ name: `Vasya${i}`, age: 30 + i, status: i % 2 === 0 });
    cars.push(car);
}
cars[0].increaseMaxSpeed(300);
console.log(cars[0].maxSpeed); // 300
// Перевірка
cars[0].changeYear(2023);
console.log(cars[0].year); // Перевірка
console.log(cars);
cars[0].drive();
cars[0].info();
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car2(model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = null;
}

// Додаємо методи через прототип
Car2.prototype.drive = function() {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
};

Car2.prototype.info = function() {
    console.log(`Модель: ${this.model}, Виробник: ${this.manufacturer}, Рік: ${this.year}, Об'єм: ${this.volume}`);
};

Car2.prototype.increaseMaxSpeed = function(newSpeed) {
    this.maxSpeed = newSpeed;
};

Car2.prototype.changeYear = function(newYear) {
    this.year = newYear;
};

Car2.prototype.addDriver = function(driver) {
    this.driver = driver;
};
// Створення масиву машин
let cars2 = [];

for (let i = 0; i < 10; i++) {
    let car = new Car2(
        `Model${i}`,
        `Manufacturer${i}`,
        2000 + i,
        180 + i * 5,
        1.6 + i * 0.1
    );
    car.addDriver({ name: `Vasya${i}`, age: 30 + i, status: i % 2 === 0 });
    cars.push(car);
}
console.log(cars[0].driver);
// Перевірка
console.log(cars2);
cars[0].drive();
cars[0].info();
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}
let cinderellas = [
    new Cinderella("Anna", 19, 36),
    new Cinderella("Olga", 21, 37),
    new Cinderella("Ira", 22, 38),
    new Cinderella("Katya", 20, 39),
    new Cinderella("Lena", 23, 40),
    new Cinderella("Nastya", 18, 35),
    new Cinderella("Vika", 24, 41),
    new Cinderella("Dasha", 25, 42),
    new Cinderella("Yulia", 26, 43),
    new Cinderella("Sofia", 27, 44)
];
// Створюємо принца
let prince = new Prince("Edward", 25, 39);
let matchByLoop = null;
for (let girl of cinderellas) {
    if (girl.footSize === prince.foundShoeSize) {
        matchByLoop = girl;
        break;
    }
}
if (matchByLoop) {
    console.log(`Принц${prince.name} Попелюшка${matchByLoop.name}`);
} else {
    console.log("Попелюшка не знайдена");
}
//********************************************************//
let matchByFind = cinderellas.find(girl => girl.footSize === prince.foundShoeSize);
if (matchByFind) {
    console.log(`Принц${prince.name} Попелюшка${matchByFind.name}`);
} else {
    console.log("Попелюшку не знайдено");
}
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
const numbers = [1, 2, 3];

numbers.myForEach((num, index) => {
    console.log(` ${index} ${num}`);
});
//***********************************************************//
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const ages = [15, 22, 18, 30];
const adults = ages.myFilter(age => age >= 18);
console.log(adults);