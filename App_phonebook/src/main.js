
class App {
  constructor() {
    this.tableHeaders = ['Name', 'Last Name', 'Email'];
    this.namePage = 'Contacts'; 
    this.arrContact = [
      ['Иван', 'Петров', 'IvanPetrov@i.ua'],
      ['Сергей', 'Сергеев', 'SergeiSerg@i.ua'],
      ['Иван', 'Иванов', 'IvanIvanov@i.ua'],
      ['Александр', 'Александров', 'AlexAlex@i.ua'],
      ['Алекс', 'Смирнов', 'AlexSmirno@i.ua'],
      ['Сергей', 'Волков', 'VolkovSerg@i.ua'],
      ['Мария', 'Шарик', 'MahaShar@i.ua'],
      ['Витя', 'Пупкин', 'PupokYo@i.ua']
    ];
    this.navigation = {
      Contacts: ['index.html', 'search', 'tab active'],
      Keypad: ['keypad.html', 'th', 'tab'],
      'Edit contact': ['edit-contact.html', 'pencil', 'tab'],
      User: ['user.html', 'user', 'tab'],
      'Add user': ['add-user.html', 'plus', 'tab']
    };
  }
  createHeader() {
    return `<header class="header"><div class="container top-radius"><h2>Contacts</h2></div></header>`;
  }
  createTableThead(arr) {
    let emptyStr = '';
    emptyStr += '<tr>';
    arr.forEach((elem) => {
      emptyStr += `<th>${elem}</th>`;
    });
    emptyStr += '</tr>';
    return emptyStr;
  }
  createTableBody(arr) {
    let tbody = '<tbody>';
    let tr = ''; 
    this.arrContact.forEach(elem => {
      tr += '<tr>'; 
      elem.forEach(cont => {
        tr += `<td>${cont}</td>`;
      });
       tr += '</tr>';
    });
    tbody = tbody + tr + `</tbody>`;
    return tbody;
  }
  createTable() {
    let table = `<table class = "table table-hover contacts"><thead>`;
    table += this.createTableThead(this.tableHeaders);
    table += `</thead>`;
    table += this.createTableBody(this.arrContact);
    table += `</table>`;
    return table;
  }
  createMain() {
    let main = `<main class ="main app"><div class = "container"><form class="form-inline search-form"><div class="form-group"><label class="sr-only" for="search">Search</label><input type="text" class="form-control" id= "search" placeholder="Search"></div></form>`;
    main += this.createTable();
    return main += `</div></main>`;
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
  sortGrid() {
    var grid = document.querySelector('table');
    var th = document.querySelectorAll("th");
    var tbody = grid.getElementsByTagName('tbody')[0];
    var rowsArray = [].slice.call(tbody.rows);         // Составить массив из TR
    grid.onclick = function(e) {
    if (e.target.tagName != 'TH') 
      return;
    rowsArray.sort(function(rowA, rowB) {             // Cортировать
      return rowA.cells[e.target.cellIndex].innerHTML > rowB.cells[e.target.cellIndex].innerHTML ? 1 : -1;
    });
    grid.removeChild(tbody);                          // Убрать tbody
    for (var i = 0; i < rowsArray.length; i++) {      // добавить результат в нужном порядке в TBODY
      tbody.appendChild(rowsArray[i]);                // они автоматически будут убраны со старых мест и вставлены в правильном порядке
    }
    grid.appendChild(tbody);
    }
  }
  render() {
    const body = document.body;
    document.querySelector("body").innerHTML = this.createHeader() + this.createMain() + this.createFooter();
    this.sortGrid();
  }
}

let phoneBook = new App();
phoneBook.render();

