/*
*
//   TASK 0. 
Найдите числа которые повторяются нечетное количество раз в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*
*/
// -----------------VERSION 1--------------------
/*
function solution (arr) {
  let arr1 = [];
  let obj = {};
  for (let key of arr) {
    obj[key] = ~~obj[key] + 1;
  }
  for (let key in obj) {
    if (obj[key] % 2 !== 0) 
      arr1.push(key);
  }
  console.log(arr1);
}
*/
// -----------------VERSION 2--------------------

function solution(arr) {
  let arr1 = arr.sort((a, b) => a > b);
  for (let i = 0; i < arr1.length - 1;) {
    if (arr1[i] === arr1[i + 1]) {
      arr1.splice(i, 2);
      i = 0;
      continue
    } else {
      i++;
    }
  }
  console.log(arr1);
}

solution([12, 23, 34, 12, 12, 23, 12, 45]); // -> [34 45]
solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]); // -> [4 100 5000]
solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]); // -> [6 5 9 21]
solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]); // -> [8 16 23 42]
solution([2, 2, 44, 44]); // => []

 const someWebpackModule = `module.exports = {
     context: %%HOMEDIR%%,
     entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
         path: %%HOMEDIR%% + '/app',
         filename: "dist/[%%APPNAME%%].js",
         library: '[%%APPNAME%%]'
    }
  }`;

/* TASK - 1
Распарсите строку и замените 
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
const myRegExp = (str, homeDir, appDir, appName) => {
   let str1 = str.replace(/%%HOMEDIR%%/g, homeDir).replace(/%%APP_DIR%%/g, appDir).replace(/%%APPNAME%%/g, appName);
  console.log(str1);
}

myRegExp(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js')


/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/
/*
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Homework 14</title>
      <link rel = 'stylesheet' href = 'main.css'>
    </head>
    <body  bgcolor="#E6E6FA">
      <ol>
        <li>
            <p> Сколько в JavaScript существует основных типов данных?</p>
            <p><input type="checkbox">5<Br>
            <input type="checkbox" >6<Br>
            <input type="checkbox">7</p>
        </li>
        <li>
          <p> Чему равно 2 && 1 && null && 0 && undefined ?</b></p>
          <input type="checkbox">null<Br>
          <input type="checkbox">false<Br>
          <input type="checkbox">1</p>
        </li>
        <li>
          <p> Сколько параметров можно передать функции ?</p>
          <input type="checkbox" >Ровно столько, сколько указано в определении функции<Br>
          <input type="checkbox">Сколько указано в определении функции или меньше<Br>
          <input type="checkbox">Любое количество</p> 
        </li>    
      </ol> 
      <div id="btn">
        <button id="button"> Проверить мои результаты </button>
      </div>
      <script src="src/main.js"></script>
    </body>
</html>
*/

/* 
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>, 
  вызывая методы объекта нужно создать dom-элементы
*/

class DOM {
  constructor() {
    this.BodyElement = document.createElement("body");
    this.questions = [
      "Сколько в JavaScript существует основных типов данных?",
      "Чему равно 2 && 1 && null && 0 && undefined ?",
      "Сколько параметров можно передать функции ?"
    ];
    this.answers = [
      ["5", "6", "7"],
      ["null", "false", "1"],
      ["Ровно столько, сколько указано в определении функции",
        "Сколько указано в определении функции или меньше",
        "Любое количество "]
    ];
  }

  h1 (content) {
    let h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.textContent = content;
  }
  button (content) {
    let button = document.createElement("button");
    button.style.cssText = "margin-left: 400px; margin-top: 50px;";
    button.textContent = content;
    document.body.appendChild(button);
  }
  list_div (cntQ, cntA) {     
    const ol = document.createElement("ol");
    document.body.appendChild(ol);
    for (let i = 0; i < cntQ; i++) {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = this.questions[i];
      ol.appendChild(li);
      li.appendChild(p);
      for (let j = 0; j < cntA; j++) {
        let p = document.createElement("p");
        let input = document.createElement("input");
        input.type = "checkbox";
        p.textContent = this.answers[i][j];
        li.appendChild(p);
        p.appendChild(input);
      }
    }
  }
  render () {
    this.h1('Тест по программированию');
    this.list_div(3, 3);
    this.button('Проверить мои результаты');
  }
}

let app = new DOM();
app.render(); 