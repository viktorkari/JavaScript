// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users =[
new User(11, "Vas","Karl","gmail.com",+30603121),
new User(16, "Vas1","Karl1","gmail1.com",+3060300),
new User(18, "Vas2","Karl2","gmail2.com",+3060312),
new User(44, "Vas3","Karl3","gmail3.com",+3060313),
new User(160, "Vas4","Karl4","gmail4.com",+306034),
new User(10, "Vas5","Karl5","gmail5.com",+306035),
new User(15, "Vas6","Karl6","gmail6.com",+306036),
new User(14, "Vas7","Karl7","gmail7.com",+306037),
new User(25, "Vas8","Karl8","gmail8.com",+306038),
new User(99, "Vas9","Karl9","gmail19.com",+306039)
]
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let sort = (users )=> {
    return users.filter( identif => identif.id %2 === 0);
}
console.log(sort(users))

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a, b) => a.id - b.id);
console.log(users);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let any = [
    new Client(12,"Boris", "Bro", "bor@gmail.com", +3806584,["apple","mellow","milk"] ),
    new Client(13,"Boris1", "Bro1", "bor1@gmail.com", +38065811, ["apple","mellow","milk","bread"]),
    new Client(14,"Boris2", "Bro2", "bor2@gmail.com", +3806554, ["apple","mellow","milk","bread"]),
    new Client(15,"Boris3", "Bro3", "bor3@gmail.com", +38065664, ["apple","mellow","milk","bread","sugar"]),
    new Client(16,"Boris4", "Bro4", "bor4@gmail.com", +38065774, ["apple","mellow","milk"]),
    new Client(17,"Boris5", "Bro5", "bor5@gmail.com", +3806588, ["apple","mellow","milk","sugar"]),
    new Client(18,"Boris6", "Bro6", "bor6@gmail.com", +3806589, ["apple","mellow","milk","wine"]),
    new Client(19,"Boris7", "Bro7", "bor7@gmail.com", +38065664, ["apple","mellow","milk"]),
    new Client(20,"Boris8", "Bro8", "bor8@gmail.com", +38065856, ["apple","mellow","milk","wine","sugar","bread"]),
    new Client(123,"Boris9", "Bro9", "bor9@gmail.com", +3806444, ["apple","mellow","milk"]),

]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

any.sort((a, b) => a.order.length - b.order.length);
console.log(any);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -  addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, sped, ls) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.sped = sped;
    this.ls = ls;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.sped} на годину`);
    };
    this.info = function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };
    this.increaseMaxSpeed = function(newSpeed) {
        this.sped = newSpeed;
        console.log(`MaxSpeed___${newSpeed}`);
    };
    this.changeYear = function(newValue) {
        this.year = newValue;
        console.log(`${newValue}`);
    };
    this.addDriver = function(driverInfo) {
        this.driver = driverInfo;
        console.log( driverInfo);
    };
}
let cars = new Car("cupe", "audi", 2023, 200, 5);
cars.drive();
cars.info();
cars.increaseMaxSpeed(300);
cars.changeYear(2024);

let driverInfo = {
    name: "John",
    age: 30,
    license: "B"
};
cars.addDriver(driverInfo);

// - (Те саме, тільки через клас)
class Car1 {
    constructor(model, manufacturer, year, sped, ls) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.sped = sped;
        this.ls = ls;
    };
    drive() {
        console.log(`Їдемо зі швидкістю ${this.sped} на годину`);
    };
    info() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };
    increaseMaxSpeed(newSpeed) {
        this.sped = newSpeed;
        console.log(`MaxSpeed___${newSpeed}`);
    };
    changeYear(newValue) {
        this.year = newValue;
        console.log(`${newValue}`);
    };
    addDriver1(driverInfo1) {
        this.driver = driverInfo1;
        console.log( driverInfo1);
    };
}
let cars1 = new Car1("cupe", "audi", 2023, 200, 5);
cars1.drive();
cars1.info();
cars1.increaseMaxSpeed(350);
cars1.changeYear(2025);

let driverInfo1 = {
    name: "Aha",
    age: 33,
    license: "A"
};
cars1.addDriver1(driverInfo1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, step) {
        this.name = name;
        this.age = age;
        this.step = step;
    };
}
    let girls = [
        new Cinderella("Alina",22,32),
        new Cinderella("Asya",23,32),
        new Cinderella("Masha",21,32),
        new Cinderella("Margo",28,34),
        new Cinderella("Nika",23,32),
        new Cinderella("Ira",23,33),
        new Cinderella("Katya",25,30),
        new Cinderella("Alya",22,30),
        new Cinderella("Karina",24,28),
        new Cinderella("Alisa",22,26)
]
class Princ {
    constructor(name, age, step) {
        this.name = name;
        this.age = age;
        this.step = step
    };
}
    let princ = new Princ("Artur", 30, 26);
for (const girl of girls) {
    if (girl.step === princ.step){
        console.log(girl);
    }
}
let neededCinderella = girls.find(cinderella => cinderella.step === princ.step);
console.log( neededCinderella);