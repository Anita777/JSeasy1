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
addStr: addStr,
lastTag: ''
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
  let newStr = `<${str}></${str}>`;
  let LTag =  newStr.substring(newStr.indexOf('</'));
  if (str1) {
    newStr =`<${str}>${str1}</${str}>`;
  }  
  if (this.tags === undefined) {
    this.tags = newStr;   
  } else {
    this.tags = this.tags.substring(0, this.tags.indexOf(this.lastTag)) + newStr 
              + this.tags.substring(this.tags.indexOf(this.lastTag));
  }
  this.lastTag = LTag;
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
var helloList1 = ezjQuery.add('body').add('div', '/') .add('pre', '/') .render();
console.log(helloList1);
var helloList2 = ezjQuery.add('div', '></ рыба').render();
console.log(helloList2);
console.log("------------------------");
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
function $(body) {
  this.tags = `<${body}></${body}>`;
  this.add = function(str, str1) {
  this.lastTag = `</${body}>`;
  let newStr = `<${str}></${str}>`;
  if (str1) {
    newStr =`<${str}>${str1}</${str}>`;
  }  
  this.tags = this.tags.substring(0, this.tags.indexOf(this.lastTag)) + newStr 
            + this.tags.substring(this.tags.indexOf(this.lastTag));
  return this;
  }
  this.render = function() {
    let StrTags = this.tags;
    this.tags = '';
    return StrTags;
  }
}
let newObj = new $('body').add('li', '/').render();
console.log (newObj);
let newObj1 = new $('body').render(); 
console.log (newObj1);// == '<body></body>'
