
class AddUser {
  constructor() {
    this.newUser = {};
    this.body = document.body;
    this.mainInfo = ['FirstName', 'LastName', 'Company'];
    this.editInfo = [
      'phone',
      'add  home phone',
      'add email',
      'add address',
      'add birthday',
      'add social profile',
      'add field'
    ];
    this.navigation = {
      Contacts: ['index.html', 'search', 'tab'],
      Keypad: ['keypad.html', 'th', 'tab'],
      'Add user': ['add-user.html', 'plus', 'tab active']
    };

  }
  createHeader() {
    return `<header class="header">
        <div class="container top-radius">
          <nav class="user-top-line">
            <a href="user.html" id = "cancel">Cancel</a>
              <button class="done-btn" id = "done">Done</button>
          </nav>
        </div>
    </header>`;
  }
  phoneNum() {
    let number = '';
    if (this.phone) {
      number += `<div class="edit-field">
      <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
      <label class="sr-only" for="phone">Add phone</label>
      <input type="text" class="add-btn" id="phone" value = "${this.phone}">
      </div>`;
    } else {
      number += `<div class="edit-field">
      <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
      <label class="sr-only" for="phone">Add phone</label>
      <input type="text" class="add-btn" id="phone" placeholder="add phone">
      </div>`;
    }
    return number;
  }
  createMain() {
  return `<main class="main"><div class="container">
			<div class="edit-main-info">${this.createPhoto()}${this.createMainInfo()}</div>${this.createEditInfo()}
			</div>
		</main>`
  }
  createPhoto() {
    return  `<div class="edit-foto">
      <button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        <span>add foto</span></button>
          </div>`;
  }
  createMainInfo() {
    let mainInfo = '';
    mainInfo += `<div class="main-info-holder">`;
    this.mainInfo.forEach(elem => {
    mainInfo +=	`<div class="edit-field">
          <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            <span>${elem}</span>
	      </button>
        </div>`;
    });
    mainInfo += '</div>'
    return mainInfo;
  }
  createEditInfo() {
    let editInfo = '';
    editInfo += `<div class="scroll-holder"><div class="edit-info">${this.phoneNum()}`;
    this.editInfo.forEach(elem => {
    editInfo +=	`<div class="edit-info">
          <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            <span>${elem}</span>
	      </button>
        </div>`;
    });
    editInfo += `<div class="edit-field"><button href="#" class="delete-contact">delete contact</button>
    </div></div></div>`;
    return editInfo;
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

   render() {
    const body = document.body;
    document.querySelector("body").innerHTML = this.createHeader() + this.createMain() + this.createFooter();
  }
}
let newUser = new AddUser();
newUser.render();

