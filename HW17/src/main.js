/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2] 
 * лидеры 17, 5 и 2.
 * */
function solution (arr) {
  arr.reverse();
  let element = arr[0];
  let newArr = [];
  arr.forEach(elem => {
    if(element <= elem) {
      element = elem;
      newArr.push(element);
    }
  });
  var result = newArr.reverse().filter((elem,ind) => ind === newArr.lastIndexOf(elem));
  return result;
}
console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]

/*
* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*
* */
//.topStyle('fetch', {backgroundColor:'blue'})
class Styles   {
  constructor () {

  }
  transform (str) {
  str = str.replace(/[A-Z]/g, function(subStr) {     
    return  str = '-' + subStr[0].toLowerCase();         
    });
  return str;
  }

  topStyle (nameStyle, objStyle) {
    const style =  document.createElement('style');  
//    style.type = 'text/css';
    var head = document.querySelector('head');
    for (var key in objStyle) {
      var newKey =  this.transform (key);
    }
    var str = `${newKey}: ${objStyle[key]}`;
    style.innerHTML += `${nameStyle} {${str}}`;
    head.appendChild(style);
  }
}
var styler = new Styles();
styler.topStyle('fetch', {backgroundColor:'blue'});


/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в 
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */

 //str.replace(regexp|substr, newSubStr|function[, flags])
 //substr - Строка, заменяемая на newSubStr.
 // newSubStr - Строка, заменяющая подстроку из первого параметра. 

const transform = str => {
  str = str.replace(/\-[a-z]/g, function(subStr) {     // находим дефис с последующим символом
    str = str.replace(/-/g, '');                          // заменяем дефис на пробел
      return  subStr[1].toUpperCase();                 // делаем букву заглавной
    });
  return str;
}
console.log(transform("background-color"));
console.log(transform("margin-left"));
console.log(transform("flex-basis"));

