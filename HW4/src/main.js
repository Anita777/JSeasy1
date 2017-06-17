
// Task 1
// 1. Напишите функцию которая принимает 2 числа 
// и возвращает массив содержащий числа между первым числом и вторым числом;


function numbersBetween(a, b) {
  let arr = [];
  if (a < b && a != b) {
    for (let i = a + 1; i < b; i++) {
      arr.push(i);
    }
    return arr ;
  }
}
console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14
console.log(numbersBetween(10, 15)); // 11, 12, 13, 14

//Task 2
// Перепешите задачу FizzBuzz, но с использованием цикла. 
// Расчет чисел должен идти до 100 
function fizzBuzz(num) {
  let str = '';
  if (num % 3 === 0) {
  	str = str + 'Fizz';
  }
  if (!(num % 5)) {
	str = str + 'Buzz';
  }
  if (!str.length) {
    return num;
  } 
  return str;
}

console.log(fizzBuzz(7));

function fizzBuzzNum (num) {
  for (let i = 0; i <= num; i++) {
  	console.log(fizzBuzz(i));
  }
}

fizzBuzzNum(100);

// Task 3

// Напишите функцию которая принимает 1 аргумент - массив
// И возвращает новый массив содержащий типы значений переменных


var arr1 = [1, null, undefined, 'str', {}, ['Hi'], function() {}];
function TypeVariable (arr) {
	let newArr = [];
	for (i = 0; i < arr1.length; i++) {
		let type = toString.apply(arr1[i]);
		newArr.push(type);
	}
	return newArr;
}
console.log (TypeVariable (arr1));

// Task 4

 /*@@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN, 
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, 
 которая вернет новый массив 
  содержащий все объекты содержащие свойство unknownAge:true
 */

var array = Array.from({ length: 35 }).map((value, index) => 
  (index % 2 ? { age: index + 2 } : { age: NaN }));

console.log(array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
console.log(array.length); // 35

function solution(arr) {
  for (i = 0; i < arr.length; i++) {
	  if ( isNaN(arr[i].age)) {
	    arr[i].unknownAge = true;
	  }
  }
  return arr;
}
console.log(solution(array));

let newArr = [];
function returnArr(argument) {
  for (i = 0; i < argument.length; i++) {
	  if (argument[i].unknownAge) {
	    newArr.push(argument[i]);
	  }	
  }
  return newArr;
}
console.log(returnArr(array), newArr.length);

