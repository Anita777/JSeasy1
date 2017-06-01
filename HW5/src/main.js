//  Task 1
'use­strict'
/*1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = ['a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9];
let arr3 = [ 0, 1, null, 2, false, 1, 0];

function moveZeroToEnd(arr) {
	let arr0 = [];
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			//arr0.push(arr.splice(i, 1));
			//i = i - 1;
			arr0.push(arr[i]);
		} else {
			newArr.push(arr[i]);
		}
	}
	newArr = newArr.concat (arr0);
	return newArr;
}
console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));
console.log(moveZeroToEnd(arr3));

//  Task 2
/* 2. Верните сумму двух найменьших чисел в массиве */
// let arrr = [10,20,30,1,31,11,10]; // => 11
//let arrr = [-1,0,25];  //=> -1
//let arrr = [-4,-10,25,10];  //=> -14

let array1 = [0,200,10,25,15]; 
let array2 = [-1,0,25];
let array3 = [-4,-10,25,10]; 

function minimalNumber(arr) {
	let min1 =  Math.min.apply(null, arr);
	arr.splice(arr.indexOf(min1), 1);
	let min2 =  Math.min.apply(null, arr);
	return min1+min2;
}
console.log(minimalNumber(array1));
console.log(minimalNumber(array2));
console.log(minimalNumber(array3));

// Task 3
/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler (str) {
	console.log(str.split(' ').reverse().join(' '));
}
 nameShuffler('john McClane'); //=> "McClane john"
 nameShuffler('Arnold Schwarzenegger'); // => "Schwarzenegger Arnold"
 nameShuffler('James Bond');  //=> "Bond James"

// Task 4
/* !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
  */
function capMe (arr) {
	let str1 = [];
	for (let i = 0; i < arr.length; i++) {
		str1.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
	}
	return console.log(str1);

}
capMe(['jo', 'nelson', 'jurie']);     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']); // returns ['Karly', 'Daniel', 'Kelsey']


/* SUPER
1. Найдите число отсутствующее в заданной последовательности
*/

function random(arr) {
	let number;
	let	step = arr[1] - arr[0];
	for (let i = 1; i < arr.length-1; i++) {
		let del = arr[i + 1] - arr[i];
		if (del != step) {
			(step > del) ? 	(number = arr[i] - step) :
							(number = arr[i + 1] - step)
		} else {
		number = arr[0] - step;
		}
	} 
	 console.log(number);
}

random([1, 3, 5, 9]); // 7
random([0, 8, 16, 32]); // 24
random([0, 16, 24, 32]); // 8
random([4, 6, 8, 10]);	//2

/*
 2. Напишите функция которая преобразовывает/открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 */

let Narr = [[1,2],[3,[4]],5, 10]; // => [1,2,3,4,5,10]
let newArray = [];
function openBraces(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			openBraces(arr[i]);
		} else 
			{	newArray.push(arr[i]);
		}
	}
	return newArray;
}
console.log(openBraces(Narr));
