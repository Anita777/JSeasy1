/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/

// 1) DRY

// DO not reapeat yourself;

// 2) Вы должны учесть все возможные варианты

const solution = (str) => {
  console.log(/^[a-z]{11,20}/.test(str));
 };
  solution("wyyga"); // false
  solution("qwertyuioplkjhgfdsazxcvbnm"); // true
  solution("ejuxggfsts"); // false
  solution("qpwoeirutyalskdjfhgmznxbcv"); // true
  solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv"); // true
  solution("0123456789abcdefghijklmnop"); // false
/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
 */
function openBraces(arr) {
  var newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArray.push(arr[i]);
    } else {
      newArray = newArray.concat(openBraces(arr[i]));
    }
  }
  return newArray;
}
console.log(openBraces([[1,2],[3,[4]],5, 10]));
console.log(openBraces([25,10,[10,[15]]]));
console.log(openBraces( [1, [2, [ {a: "b"} ] ] ]));
/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/

const app = {
  tableHeaders: ['Name', 'Last Name', 'Email'],
  namePage: 'Contacts',
  arrContact: [
    ['Иван', 'Петров', 'IvanPetrov@i.ua'],
    ['Сергей', 'Сергеев', 'SergeiSerg@i.ua'],
    ['Иван', 'Иванов', 'IvanIvanov@i.ua'],
    ['Александр', 'Александров', 'AlexAlex@i.ua'],
    ['Алекс', 'Смирнов', 'AlexSmirno@i.ua'],
    ['Сергей', 'Волков', 'VolkovSerg@i.ua'],
    ['Mария', 'Шарик', 'MahaShar@i.ua'],
    ['Витя', 'Пупкин', 'PupokYo@i.ua'],
  ],
  
  new(tag, clasS, content) {
    let newT = document.createElement(tag);
    newT.className = clasS;
    newT.textContent = content;
    return newT; 
  },

  createHeader() {
    const header = this.new('header', 'header');
    const div = this.new('div', 'container top-radius');
    const h2 = this.new('h2', '',  this.namePage);
    div.appendChild(h2);
    header.appendChild(div);
    return header;
  },

  createForm() {
    const form = this.new('form', 'form-inline search-form');
    const div = this.new('div', 'form-group');
    const label = this.new('label', 'sr-only', 'Search');
    label.setAttribute('for', 'search');
    const input = this.new('input', 'form-control', 'Search');
    input.className = "form-control";
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'search');
    input.setAttribute('placeholder', 'Search');
    div.appendChild(label);
    div.appendChild(input);
    form.appendChild(div);
    return form;
  },
  
  createTableThead() {
    const thead = this.new('thead');
    const tr = this.new('tr');    
    this.tableHeaders.forEach(tabHeader => {
      const th = this.new('th', '', tabHeader);
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    return thead;  
  },
  createTable() {
    const table = this.new('table', 'table table-hover contacts');
    const tr = this.new('tr'); 
    const tbody = this.new('tbody');
    this.arrContact.forEach(elem => {
      const tr = this.new('tr');
      tbody.appendChild(tr);
      elem.forEach(cont => {
        const td = this.new( 'td', '', cont);
        tr.appendChild(td)
      });
    })
    table.appendChild(this.createTableThead());
    table.appendChild(tbody);
    this.createTableThead().appendChild(tr);
    return table;
  },
  createFooter() {
    const footer = this.new('footer', 'footer');
    const div = this.new('div', 'container bottom-radius');
    const nav = this.new('nav', 'main-nav');
    const a = this.new('a', 'tab active');
    nav.appendChild(a);
    div.appendChild(nav);
    footer.appendChild(div);
    return footer;
  },
  render() {
    const body = document.body; 
    body.appendChild(this.createHeader());
    const main = this.new("main");
    const div = this.new('div', 'container');
    div.appendChild(this.createForm());
    main.appendChild(div);
    div.appendChild(this.createTable());
    body.appendChild(main);
    body.appendChild(this.createFooter());
  }
}

app.render ();
