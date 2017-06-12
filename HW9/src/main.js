'use strict';

// Legolas Task !

// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requires: ['Node.js', 'JavaScript', 'OOP'],
  goodDev: goodDev
};

let developer2 = {
  experience: [ // опыт
    { technology: 'java' },
    { technology: 'c++' },
    { technology: 'aws' },
    { technology: 'docker' }
  ],
  requires: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};


function goodDev(dev) {
  let skil;
  (this.skills) ? skil = this.skills : 
                  skil = this.experience.map(elem => elem.technology);
  this.requires.forEach ((elem, index) =>
    skil.includes (elem) ?  console.log(`required: ${elem} ... success`) :
                            console.log(`required: ${elem} ... fail`)); 
}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
  console.log(`developer ${index + 1}`);
  dev.goodDev();
});

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по 
 * переданному значению
 * 
 * При вызове функции используйте this
 *
 * */
// Не доработано!
let myObject = {
  database: [
    { age: 100, name: 'b' },
    { age: 15, name: 'c' },
    { age: 25, name: 'a' }
  ],
  myFilter: myFilter
};

function myFilter (key) {
  if (key == 'age') {
    this.database.sort((a, b) => a.age - b.age);
  } else {
    this.database.sort((a, b) => a.name > b.name ? 1 : -1);
  }
  return this.database;
}
// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

console.log(myObject.myFilter('age'));
console.log(myObject.myFilter('name'));

// {age:25, name:a}, {age:100, name: b} ...

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
 /*
1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ]; 
// => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
let arr3 = [ 0, 1, null, 2, false, 1, 0 ];
//=> [1,null,2,false,1,0,0]

var moveZeroToEnd = (arr) => {
  let arr0 = [];
  let newArr = [];
  arr.forEach((elem, index) => elem === 0 ? arr0.push(elem) : newArr.push(elem));
  console.log(newArr = newArr.concat (arr0));
}
moveZeroToEnd(arr1);
moveZeroToEnd(arr2);
moveZeroToEnd(arr3);

/* 2. Верните сумму двух найменьших чисел в массиве */
// let arrr = [10,20,30,1,31,11,10]; // => 11
// let arrr = [-1,0,25];  //=> -1
// let arrr = [-4,-10,25,10];  //=> -14
//var arr = ["1. text1", "12.text3", "2.text2"];

let array1 =  [10, 20, 30, 1, 31, 11, 10]; 
let array2 = [-1, 0, 25];
let array3 = [-4, -10, 25, 10];
let array4 = [0, 200, 10, 25, 15];

//var minimalNumber = (arr) => arr.sort((a, b) => a - b); 
var minimalNumber = (arr) => {
  arr.sort(); 
  console.log(arr[0] + arr[1]);
};

minimalNumber(array1);
minimalNumber(array2);
minimalNumber(array3);
minimalNumber(array4);


/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

var nameShuffler = (str) => console.log(str.split(' ').reverse().join(' '));
nameShuffler('john McClane'); //=> "McClane john"
nameShuffler('Arnold Schwarzenegger'); // => "Schwarzenegger Arnold"
nameShuffler('James Bond');  //=> "Bond James"

/*
4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
*/

var capMe = (arr) => {
  let str = [];
  arr.forEach((elem, index) =>
  str.push(elem[0].toUpperCase() + elem.slice(1).toLowerCase()));
  console.log(str);
}

capMe(['jo', 'nelson', 'jurie']);     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']); // returns ['Karly', 'Daniel', 'Kelsey']

////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов, 
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length
/*https://developer.mozilla.org/
fun.apply(thisArg[, argsArray])
thisArg = object.name;
Можно использовать псевдомассив arguments для передачи всех аргументов в вызываемый объект. 
Вызываемый объект самостоятельно разберётся с обработкой аргументов.
*/
function addMethod(object, name, fn) {
  var old = object[name];                   //Получили старую функцию, соответствующую этому name при первом вызове addMethod
  object[name] = function(){                // Присвоили объекту новую функцию (старая функция в замыкании)
    if (fn.length == arguments.length) {
      return fn.apply(this, arguments)      // Вызываем нашу функцию
    } else if (typeof old == 'function')  // Если в замыкании есть еще одна переменная
                                        // с таким именем, проверяем является ли она функцией, если да вызываем  ее
      return old.apply(this, arguments);
  };
}

addMethod(junior, 'ok', function() {
  console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
  console.log('three arguments');
});

junior.ok(); //'zero arguments'
junior.ok(1); //'one arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1, 2, 3); // 'three arguments'


