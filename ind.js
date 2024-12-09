
let day = "Воскресенье"
switch (day) {
    case "Понедельник":
    case "Вторник":
    case "Среда":
    case "Четверг":
    case "Пятница":
         console.log(day + "- это будний день");
         break;
    case "Суббота":
    case "Воскресенье":
         console.log(day + "- это выходной день");
        break;
    default:
        console.log("ошибка ввода!");
        break;
}

let num = 7;
if (num % 2 === 0) {
    console.log('Число четное');
}
else {
    console.log('Не четное');
}

//console.log(Math.random() > 0.5 ? 7 : 3);
//console.log(5/0);

let users = ['Наталья','Виктор','Юрий','Максим']
users.push('Василий')
users.unshift('Мария')
let counter = 0
while (counter < users.length) {
   // console.log(`User: ${users[counter]}`);
    counter++
}

// let numbers = []
// let count = 10
// for (let i = 0; i < count; i++) {
//     numbers.push(Math.round(Math.random()*100))
// }
//console.log(numbers);

// let numbersArr = [12,33,56,28,67]
// for (const it of numbersArr) {
//     console.log(it);
// }

//Функция получения случайного числа в заданном диапазоне

function getRand(n, m) {
    let range = Math.abs(m - n)
    let min = Math.min(m, n)
    let rand = Math.round((Math.random() * range) + min)
    console.log(rand);
}
getRand(20, 50);

//for (let i = 0; i < 5; i++) {
//    getRand(20, 50);
//}

 let dayIndex = new Date().getDay();
 console.log(`Сегодня: ${dayIndex}-й день недели`);

 function getWeekDay(index) {
    let days = [
        'воскресенье',
        'понедельник',
        'втроник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
    ]
    return days[index];
 }
 console.log("День недели: " + getWeekDay(dayIndex));

//Функция поиска индекса элемента массива

let arrItems = ['Кофе','Яблоко','Вода','Банан','Хлеб','Молоко'];
let findIndex = function(findArr, value) {
    
    for (let i = 0; i < findArr.length; i++) {
        if (findArr[i] === value) {
            return i;
        }
    }

    return -1;
}

console.log(findIndex(arrItems, 'Кjjj'));

//Объекты

let user = {
    name: "Natali",
    birthDate: {
        year: 1974,
        month: 7,
        day: 27
    },
    hello: function() {
        console.log('Hello!!! My name is ' + this.name + ", I am " + this.age());
    },
    age() {
        return 2024 - this.birthDate.year
    }
}
user.hello();

//Объединение объектов

let cpu = {
    coreCount: 8,
    cpuManufacturer: 'AMD',
    socket: 'AM4',
};

let computer1 = {
    prise: 120000,
    ...cpu,
}

let computer2 = Object.assign({
    prise: 150000}, cpu,)

    console.log(computer2); 

    let arrProps = Object.keys(computer1) //получить массив свойств объекта
    let arrV = Object.values(computer1)
    let arrEnt = Object.entries(computer1)

   for (let key in arrV) {
    console.log(`${key}) характеристика: ${arrV[key]}`);
   }

 console.log(typeof arrEnt);
