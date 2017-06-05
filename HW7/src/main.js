'use strict';
/*
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать 
 * все передаваемые ей числа
 *
 * */

function add (x) {
  return function (y){
    return function (z){
      return x + y + z;
      }
    }
  }
console.log(add(1)(2)(3));
console.log(add(10)(5)(15));
console.log("---------------------");

/*
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта 
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 */
  
function patternModule () {
  let i = 0;
  let obj = {};
  obj.method = function method () {
    i++;
    console.log(i);
  }
  obj.clear = function clear () {
    i = 0;
  }
  return obj;
}
  
let test = patternModule();
test.method(); // 1
test.method(); // 2
test.method(); // 3
test.clear();
test.method(); // 1
test.method(); // 2
test.method(); // 3
console.log("---------------------");

// @SUPER

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода( функция )
 *
 *  При вызове метода отобразите сумму передаваемых параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 */
 // @SUPER - PUPER,
/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 * */

let jun = {};
function methodCounter(obj, name, num, fn) {
  let count = num;
  obj[name] = function(arg) {
    if (count >= 1) {
      count = count - 1;  
      return fn(arg); 
    } else {
        return console.log("ERROR ! add more tries");
    }
  };
  obj.Num = function(num1) {
    count = num1;
  };
}
methodCounter(jun, "logger", 2, function(args) {
  let sum = args.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log(sum);
});

jun.logger([1, 2, 3, 4]); //  10
jun.logger([5, 5, 5, 5]); //  20
jun.logger([5, 5]); // ERROR ! add more methods
jun.logger([5, 5]); // ERROR ! add more methods
jun.logger([5, 5]); // ERROR ! add more methods
jun.Num(3);
console.log("-----------------------");
jun.logger([1, 2, 3, 4]); //  10
jun.logger([5, 5, 5, 5]); //  20
jun.logger([5, 5]);       //  10
jun.logger([5, 5]); // ERROR ! add more methods
jun.logger([5, 5]); // ERROR ! add more methods
