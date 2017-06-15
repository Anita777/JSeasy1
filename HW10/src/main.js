/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
  let y = 5;
  t();
};
console.log(y);
//z(x);
console.log(z(x));

//Ответ: выражение z(x) вернет undefined,
// потому что функция z ничего не возвращает

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

let $$ = (str) => `<${str}></${str}>`;

let createBODY = $$('body');
let createDIV = $$('div');
let createH1 = $$('h1');
console.log(createBODY);  // <body></body>
console.log(createDIV);   // <div></div>
console.log(createH1);    // <h1></h1>
console.log('-----------------'); 
/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */


var ezjQuery = {
addStr: addStr
};

function addStr (str)  {
  let newStr =`<${str}></${str}>`;
 (this.tag) ?  (this.tag += newStr):(this.tag = newStr) ;
  console.log(this.tag);
  return this;
}

ezjQuery
  .addStr('body')   //<body></body>
  .addStr('div')    //<body></body><div></div>
  .addStr('h1');    //<body></body><div></div><h1></h1>

console.log('--------------------');

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 --- 
 * И добавьте объекту ezjQuery метод render, который будет возвращать 
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */

ezjQuery.add = function  (str, str1)  {
  (str1===undefined) ? newStr =`<${str}></${str}>` :
                       newStr =`<${str}>${str1}</${str}>`;
  if (this.tags === undefined) {
    this.tags = newStr;
  } else {
    let mid = this.tags.indexOf('/')-1;
    this.tags = this.tags.slice(0, mid) + newStr 
              + this.tags.slice(mid);
  }
  return this;
}

 ezjQuery.render = function() {
  let StrTags = ezjQuery.tags;
  ezjQuery.tags = '';
  return StrTags; 
}

// example
var helloList = ezjQuery
  .add('body') // <body></body>
  .add('div') // <body><div></div></body>
  .add('ul') // <body><div><ul></ul></div></body>
  .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
  .render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>

//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery
  .add('body') //<body></body>
  .add('div') //<body><div></div></body>
  .render();
console.log(bodyDiv); //<body><div></div></body>
document.write(helloList);
// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
