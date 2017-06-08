'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * 
 * */

function solution1() {
	let tempArg = '';
	return function (str) {
		tempArg = `${tempArg} ${str}`;
		console.log(tempArg);
	};
}

let stringBuffer = solution1();

stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('Привет'); // Замыкания Использовать нужно Привет
// вызываем много раз
console.log('-------------------------');
/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
	let stack = [];
	let obj = {
		'[': ']',
		'{': '}',
		'(': ')',
	};
    for(let i = 0; i < str.length; i++) {
      	let elem = str[i];
      	if (obj[elem]) {
        	stack.push(elem);
      	} else {	
	      	if(obj[stack[stack.length-1]] == elem) {
	        	stack.pop();
	      	} else {
	      	return console.log('false');
	      	}
  		}
    }
    if (stack.length == 0)
    	return console.log('true');
}
validBraces('(){}[]'); //=> returns true
validBraces('(}'); //=> returns false
validBraces('[(])'); // => returns false
validBraces('([{}])'); //=> returns true
console.log('-------------------------');

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

function makeCallback(fn) {
	for (let i = 1; i <= 10; i++) {
		setTimeout(function() {
		console.log(i);
    	}, i * 1000);
  	}
  	setTimeout(fn, 11*1000);
}
makeCallback(function() {
	console.log('THE LAST LAST comment');
});


// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму 
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * 
 * Вычисления должны кешироваться, если в функцию попадает закешированное 
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */

let cache = {};
function sum(num) {
	let sum = 0;
	let numb = num;
	if (!cache[num])  {
		while (0 <= numb ) {
			sum = sum + numb;
			numb--;
		}
		cache[num]=sum;
		console.log(sum);
	} else {
		console.log('from cache',cache[num]);
	}
}

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэша
sum(5); // 15 Значение взято из кэша
sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша
sum(5); // 15 Значение взято из кэша





