
// Task 1
// 1. Напишите функцию которая принимает 2 числа 
// и возвращает массив содержащий числа между первым числом и вторым числом;
 var i;
function numbersBetween(a, b) {
	let array = [];
	for (i = a; i <= b; i++) {
		array.push(i);
	}
	return array.slice(1, -1);
}
console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14
console.log(numbersBetween(10, 15)); // 11, 12, 13, 14

//Task 2
// Перепешите задачу FizzBuzz, но с использованием цикла. 
// Расчет чисел должен идти до 100 
function fizzBuzz(num) {
	for (num = 1; num < 100; num++) {
        if(num % 3 == 0 || num % 5 == 0) {
     		if(num % 3 == 0 && num % 5 == 0) {
         		console.log("FizzBuzz");
    	} else if (num % 3 == 0) {
         	console.log("Fizz");
     		} else {
         	console.log("Buzz");
    		}
 		} else { 
 			console.log(num);
     	}
    }
}
console.log(fizzBuzz(15));

/*	var arrfb = ['FizzBuzz'];
	var arrb = ['Buzz'];
	var arrf = ['Fizz'];
	var arrn = ['Num'];
function fizzBuzz() {
	for (var num = 1; num <= 100; num++) {
		if (num%5 == 0 && num%3 == 0) {
		  	arrfb.push(num);
		} else {
		  	if (num%5 == 0) {
		  		arrb.push(num);
		  	} else {
		  		if (num%3 == 0) {
		  			arrf.push(num);
		  		} else {
		  			if (num%5 != 0 && num%3 != 0) {
		  				arrn.push(num);
		  			}
		  		}
		  	}
		}
	}
	console.log(arrfb);
	console.log(arrb);
	console.log(arrf);
	console.log(arrn);
}
fizzBuzz();
*/

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

