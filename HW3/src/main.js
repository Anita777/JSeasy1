// Task 1
let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
function addToArray(arrParam, newElem) {
	 arrParam[arrParam.length] = newElem;
	 return arrParam;
}

console.log(addToArray(arr, 4));


// Task 2

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];
function simpleObjectGenerator (param1, param2, param3) {

return ({argument1: param1, argument2: param2, argument3: param3});
}

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));
console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));

//Task 3

var myName = { name: 'Ivan' };
//var myName = { name: 'Ivan',  family: 'Petrov'};

function addNameToUser(newKey, newValue, userName) {
	obj = {newKey: newValue};
	if (newKey in userName) {
		alert ('Такое свойство есть!');
	} else	{
		userName.newKey = newValue;
	}
	return userName;
}

addNameToUser('family', '%Ivanov%', myName);
console.log(myName);

//Task 4

function fizzBuzz(num) {
	if (num%5 == 0 && num%3 == 0) {
	  	return ('FizzBuzz');
	} else {
	  	if (num%5 == 0) {
	  		return ('Buzz');
	  	} else {
	  		if (num%3 == 0) {
	  			return ('Fizz');
	  		} else {
	  			if (num%5 != 0 && num%3 != 0) {
	  				return (num);
	  			}
	  		}
	  	}
	}
}
console.log(fizzBuzz(7));

//Task 5

// Может, я неправильно поняла задание...

let array = [];
function Func1(arg1, arg2, arg3, Func2) {
	array[0] = arg1;
	array[1] = arg2;
	array[2] = arg3;
	Func2();
}

Func1( 1, 2, 3, function() {alert (array)});	
