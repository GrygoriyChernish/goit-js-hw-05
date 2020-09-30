// Задача 5-5
// класс
// Напиши класс Car с указанными свойствами и методами.

// class Car {
//   /*
//    * Добавь `статический` метод
//    * `getSpecs(car)`, который принимает
//    * объект-машину как параметр
//    * и возвращает шаблонную строку
//    * со свойствами и значениями объекта.
//    * Свойства:
//    *   maxSpeed,
//    *   speed,
//    *   isOn,
//    *   distance,
//    *   price
//    * Пример строки, полученной этим методом:
//    * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость,
//    *          начальное значение `0`
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль.
//    *         Значения `true` или `false`,
//    *         начальное значение false
//    *  distance - пробег в километрах,
//    *             начальное значение `0`
//    */
//   constructor() {}

//   /*
//    * Добавь геттер и сеттер
//    * для свойства `price`, который будет
//    * работать с свойством цены автомобиля.
//    *
//    * ВАЖНО: для записи методов get и set
//    * значение параметра записывают с
//    * подчеркиванием. См. ниже пример 1.
//    */

//   /*
//    * Метод, который заводит автомобиль
//    * Записывает в свойство `isOn` значение `true`
//    */
//   turnOn() {}

//   /*
//    * Метод, чтобы заглушить автомобиль
//    * Этот метод должен записывать
//    * в свойство isOn значение false,
//    * и сбрасывать текущую скорость до 0
//    */
//   turnOff() {}

//   /*
//    * Этот метод должен добавлять
//    * к свойству `speed` полученное
//    * значение, при условии,
//    * что результирующая скорость
//    * не больше чем значение свойства `maxSpeed`
//    */
//   accelerate(value) {}

//   /*
//    * Этот метод должен отнимать
//    * от свойства `speed`
//    * полученное значение, при условии,
//    * что результирующая скорость не меньше 0
//    */

//   decelerate(value) {}

//   /*
//    * Этот метод должен добавлять к свойству
//    * `distance` пробег в километрах,
//    * т.е. hours * speed,
//    * но только в том случае,
//    * если машина заведена!
//    */
//   drive(hours) {}
// }

// #### Пример 1.

// ```js
// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   constructor(name, roomNumber) {
//     /* параметр name не должен
//      *   совпадать с названием свойства
//      *   но должен быть похож.
//      *   Поэтому используют прием смены
//      *   названия добавляя символ '_'.
//      *   Хотя это может любой другой символ
//      */
//     this._name = name;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }
// Редактор JavaScript:
// 1
// class Car {
// 2
//  // Write code under this line
// 3
//   getSpecs(){}
// 4
//   constructor(){}
// 5
//   get price() {}
// 6
//   set price(value) {}
// 7
//   turnOn() {}
// 8
//   turnOff() {}
// 9
//   accelerate(value) {}
// 10
//   decelerate(value) {}
// 11
//   drive(hours) {}
// 12
// }
// 13

// 14
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// 15
// mustang.turnOn();
// 16
// mustang.accelerate(50);
// 17
// mustang.drive(2);
// 18
// ​
// 19
// // console.log(Car.getSpecs(mustang));
// 20
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
// 21
// ​
// 22
// mustang.decelerate(20);
// 23
// mustang.drive(1);
// 24
// mustang.turnOff();
// 25
// ​
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

class Car {
  static getSpecs({ maxSpeed = 300, speed = 0, isOn = false, distance = 0, price = 0 } = {}) {
    return `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`;
  }

  constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price } = {}) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }
  turnOn() {
    return (this.isOn = true);
  }
  turnOff() {
    this.speed = 0;
    this.isOn = false;
  }
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
  }
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
