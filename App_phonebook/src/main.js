
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
      ['Mария', 'Шарик', 'MahaShar@i.ua'],
      ['Витя', 'Пупкин', 'PupokYo@i.ua']
    ];
    this.navigation = [
      'index.html',
      'keypad.html',
      'edit-contact.html',
      'user.html',
      'add-user.html'
    ]
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
  createNav(arr) {
    let nav = '<nav class="main-nav">';
    let a = '';
    let nameNav = '';
    arr.forEach(function(elem, index) {
      nameNav = elem.substring(0, elem.indexOf('.'));
      nameNav = nameNav[0].toUpperCase() + nameNav.substring(1);
      if (index === 0) {
        a +=  `<a href= ${elem} class="tab active"><span class = "tab-text">${nameNav}</span></a>`;
      } else {
        a +=  `<a href= ${elem} class="tab"><span class = "tab-text">${nameNav}</span></a>`;
      }
    });
    nav = nav + a + '</nav>';
    return nav; 
  }
  createFooter() {
    let footer = `<footer class="footer"><div class="container bottom-radius">`;
    footer += this.createNav(this.navigation) ;
    footer += `</div></footer>`;
    return footer; 
  }
  render() {
    const body = document.body;
    document.querySelector("body").innerHTML = this.createHeader() + this.createMain() + this.createFooter();
  }
}

let phoneBook = new App();
phoneBook.render();
