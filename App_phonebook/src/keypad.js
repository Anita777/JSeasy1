/* 
Нужно визуализировать keypad.html -> keypad.js
Нужно визуализировать index.html -> app.js
Структура виртуализации:
 
 - header - один блок 
 - main - второй блок
 >------ Это 2 разных класса
 У каждого из классов, рендер на странице запускается при помощи метода .render
innerHTML по максимуму
https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
Сделайте чтобы при нажатии на кнопку цифра отобразилась в <span class="numbers">
*/


/*
https://aleksandra-maslennikova.github.io/telephone-book/index.html
По клику по заголовку таблицы, таблица сортировалась по соответствующему свойству
*/


class Header {
  constructor() {

  }
  render() {
    const body = document.body;
    document.querySelector("body").innerHTML = `<header class="header"><div class="container top-radius"><h2>Keypad</h2></div></header>`;
  }
}
var head = new Header();
head.render();


class Keypad {
  constructor() {
    this.arr =['0','1','2','3','4','5','6','7','8','9','*','#'];
    this.navigation = {
      Contacts: ['index.html', 'search', 'tab'],
      Keypad: ['keypad.html', 'th', 'tab active'],
      'Add user': ['add-user.html', 'plus', 'tab']
    };
  }
  createHeader() {
    return `<header class="header"><div class="container top-radius"><h2>Keypad</h2></div></header>`;
  }

  createMain() {
    let main = `<main class = "main keypad"><div class="container">
      <div class="number">
        <span id = "addUser" class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        <span class ="numbers"></span>
        <span id = "deleteNumber" class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
      </div>
      <div class="keypad-holder"> `;
    this.arr.forEach(function(elem) {
      main += `<button class="key">${elem}</button>`;
    });
    main += `<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
      </div>
    </div>
  </main>`
    return main;
  }
  createNav(obj) {
    let nav = '<nav class="main-nav">';
    let a = '';
    for(let key in obj) {
      a += `<a href="${obj[key][0]}" class="${obj[key][2]}">
      <span class="glyphicon glyphicon-${obj[key][1]}" aria-hidden="true"></span>
      <span class = "tab-text">${key}</span>
      </a>`; 
    }
    nav = nav + a + '</nav>';
    return nav; 
  }
  createFooter() {
    let footer = `<footer class="footer"><div class="container bottom-radius">`;
    footer += this.createNav(this.navigation) ;
    footer += `</div></footer>`;
    return footer; 
  }
  enterNumber() {
    const buttons = document.querySelectorAll('button');
    var span = document.getElementsByClassName('numbers');
    [...buttons].forEach(elem => {
      elem.onclick = function() {
        [...span].forEach(el => {  
          if (el.textContent.length < 15) {
            if (!el.textContent) {
              el.textContent += '(' + `${elem.innerHTML}`;
            } else if (el.textContent.length == 4) {
              el.textContent += ')-' + `${elem.innerHTML}`;
            } else if (el.textContent.length == 8 || el.textContent.length == 11) {
              el.textContent += '-' + `${elem.innerHTML}`;
            }
            else {
              el.textContent += `${elem.innerHTML}`;
            }
          }
        });
       }  
    });
  }
  render() {
    const body = document.body;
    document.querySelector("body").innerHTML += this.createMain()  + this.createFooter();
    this.enterNumber();
  }
}
let keypad = new Keypad();
keypad.render();