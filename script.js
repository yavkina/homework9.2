const people = [];
const map = new Map();
let age = 0;
let jump = 0;
let averageAge = 0;
let averageJump = 0;


while (true) {
    const str = prompt('Введите через запятую: Имя, возраст, город, количество прыжков');
    
    if (str === null || str === "") {
        break;
  };


    function getInfo(name, age, city, jump) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.jump = jump;
};


    const arr = str.split(",");
    people.push (new getInfo(arr[0], arr[1], arr[2], arr[3],));
    people.forEach ((item, index) => {
        map.set ("Гость " + ++index, item);
    });

    age += Number(arr[1]);
    jump += Number(arr[3]);
    averageAge = age / people.length;
    averageJump = jump / people.length;
};


console.log(`Средний возраст: ${averageAge}
Cреднее количество прыжков: ${averageJump}`);