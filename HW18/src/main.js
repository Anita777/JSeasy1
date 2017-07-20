/*
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов,
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/

function solution(arr) {
  var myArr = arr.join('').match(/[\w\s]/g).join('').split(' ');
  var averageWordLength = myArr.reduce(function (sum, elem) {
    return sum += elem.length;
  }, 0) / myArr.length;
  return myArr.filter(function (elem) { return elem.length > averageWordLength });
}
console.log(solution(["This is a sample string"]));   //["This" "sample" "string"]
console.log(solution(["Some another sample"]));       // ["another" "sample"]
console.log(solution(["Do, do, do, do... do it!"]));  // []

/* TASK 1
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
*/

let tds = [...document.querySelectorAll('td')];
let tbody = document.querySelector('tbody');
tbody.addEventListener('click', event => {
  let cell = event.target;
  if (cell.tagName === 'TD') {
    let index = tds.indexOf(cell);
    let newIndex = tds.length - 1 - index;
    tds[newIndex].style.backgroundColor = 'lime';
  }
})

// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/
