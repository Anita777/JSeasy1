/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив 
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 // solution([[]]) => []
 

 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

let solution = (arr) => {
  let newArr = [];
  if (arr.length === 3) {
  	newArr.push([]);
    newArr.push([]);
  }
  if (arr.length === 2) {
  	newArr.push([]);
    newArr.push([]);
    newArr.push([]);
  }
  if (arr.length === 0) {
   	 newArr.push([]);
  }
  arr.forEach((elem) => {
    elem.forEach((el, ind) => {
      (ind === 0 || ind % 2 === 0) ? newArr[ind].push(el) : newArr[1].push(el);
    });
  });
  return newArr;
}

console.log(solution([ [1, 3, 5],[2, 4, 6]])); //[ [1, 2],[3, 4],[5, 6] ]
console.log(solution([ [1, 'a'],[2, 'b'],[3, 'c'] ])); // [[1, 2, 3],[a, b, c]]
console.log(solution([[]]));  // []

/*
 Визуализируйте массив, если в коллекции есть свойство children,
  тогда создайте вложенный лист
 name - свойство h1
 children ul->li
 Используйте innerHTML
 */

const navigation = [
  { name: 'Главная' },
  {
    name: 'Каталог',
    children: [
      {
        name: 'Компьютеры',
        children: [
          { name: 'Ноутбуки' },
          { name: 'Планшеты' }
        ]
      }
    ]
  },
  { name: 'Профиль' }
];

const child = arr => {
  var strChild = '<ul>';
  arr.forEach(elem => {
    for(let key in elem) {
      (key === 'name') ? strChild += `<li> ${name(elem.name)} </li>` :
                         strChild += child (elem.children);
    } 
  });
  strChild += '</ul>';
  return strChild;
}

const name = param => {
  var strName = `<h1>${param}</h1>`;
  return strName;
}
const visualArray = arr => {
  var emptyStr = '';
  arr.forEach(elem => {
    for(let key in elem) {
      (key === 'name') ? emptyStr += name(elem.name) :
                         emptyStr += child (elem.children);
    }
  });
  const body = document.body;
  body.innerHTML = emptyStr;
};
visualArray(navigation);


//  ПРИЛОЖЕНИЕ
// 1. Форкните репозиторий Саши.
// Добавьте скрипт который будет рисовать всю страницу с таблицей.
// https://github.com/aleksandra-maslennikova/my-phone-book
// удалите на всех страницах bootstrap.js, jquery.js
// по максимуму

// 2. Напишите функцию, которая будет получать последнего родителя
// у элемента, но не body

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса

