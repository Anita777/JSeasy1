
class App {
  constructor() {
    this.tableHeaders = ['Name', 'Last Name', 'Email'];
    this.namePage = 'Contacts';
    this.curContact;
    this.contact = [
      {name: 'Иван', lastname: 'Петров', email: 'IvanPetrov@i.ua'},
      {name: 'Сергей', lastname: 'Сергеев', email: 'SergeiSerg@i.ua'},
      {name: 'Иван', lastname: 'Иванов', email: 'IvanIvanov@i.ua'},
      {name: 'Александр', lastname: 'Александров', email: 'AlexAlex@i.ua'},
      {name: 'Алекс', lastname: 'Ушаков', email: 'AlexSmirno@i.ua'},
      {name: 'Витя', lastname: 'Пупкин', email: 'PupokYo@i.ua'},
      {name: 'Сергей', lastname: 'Шелков', email: 'VolkovSerg@i.ua'},
      {name: 'Мария', lastname: 'Шарик', email: 'MahaShar@i.ua'}
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
  createTableBody(arg) {
    var contacts;
    if (arg) {
      contacts = arg;
    } else { 
      contacts = this.contact; 
    }
    let tbody = '<tbody>'
    contacts.forEach(elem => {  
      tbody += `<tr><td>${elem.name}</td><td>${elem.lastname}</td><td class = "email">${elem.email}</td></tr>`;
    });
    return tbody += `</tbody>`;
  }

  createTable() {
    let table = `<table class = "table table-hover contacts"><thead><tr>`;
    let tableHeader = '<tr>';
    this.tableHeaders.forEach(elem => {
      tableHeader += `<th>${elem}</th>`;
    });
    tableHeader += '</tr>';
    return table += tableHeader + this.createTableBody() + `</table>`;
  }

  createMain() {
   let main =
      `<main class ="main app">
      <div class = "container">
        <form class="form-inline search-form">
          <div class="form-group">
            <label class="sr-only" for="search">Search</label>
            <input type="text" class="form-control" id= "search" placeholder="Search">
          </div>
        </form>`;
    main += this.createTable();
    return main += `</div></main>`
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
  filterUser (char){
    let users = [];
    this.contact.forEach(elem => {
      if (elem.name.search(`${char}`) != -1  || elem.name.toLowerCase().search(`${char}`) != -1) {
        users.push(elem);
      }
    })
    return users;
  }
  sortUsers(key) {
    return  this.contact.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
  events() { 
    this.tbody = document.querySelector('tbody');
    this.search = document.getElementById('search');
    this.grid = document.querySelector('table');

    this.search.addEventListener('keyup', e => {
      this.findUser = this.filterUser(this.search.value);
      this.tbody.innerHTML = this.createTableBody(this.findUser);
    });

    this.grid.addEventListener('click', e => {
      if (e.target.tagName != 'TH') 
        return;
      this.curFilter = this.sortUsers(e.target.innerHTML.toLowerCase().replace(/\s/ig,''));
      this.tbody.innerHTML = this.createTableBody();
    });
  }
  render() {
    const body = document.body;
    document.querySelector("body").innerHTML = this.createHeader() + this.createMain() + this.createFooter();
    this.events();
  }
}

let phoneBook = new App();
phoneBook.render();

