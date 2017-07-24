
class EditUser {
  constructor() {
    this.body = document.body;
    this.mainInfo = ['FirstName', 'LastName', 'Company'];
    this.editInfo = [
      {'add  home phone': "add-btn"},
      {'add email': "add-btn"},
      {'add address': "add-btn"},
      {'add birthday': "add-btn"},
      {'add social profile': "add-btn"},
      {'add field': "add-btn"}
    ];
    this.navigation = {
      Contacts: ['index.html', 'search', 'tab'],
      Keypad: ['keypad.html', 'th', 'tab'],
      'Edit contact': ['edit-contact.html', 'pencil', 'tab active'],
      User: ['user.html', 'user', 'tab'],
      'Add user': ['add-user.html', 'plus', 'tab']
    };


  }
  createHeader() {
    return `<header class="header">
		<div class="container top-radius">
			<nav class="user-top-line">
				<a href="user.html">Cansel</a>
				<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" class = "done-btn">Done</button>
			</nav>
		</div>
	</header>`;
  }
  createMain() {
  	return `<main class="main">
   <div class="container">
    <div class="edit-main-info">${this.createPhoto()}${this.createMainInfo()}</div>
     ${this.createEditInfo()}
     </div>
   </main>`
  }
  createPhoto() {
    return `<div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>`;
  }
  createMainInfo() {
    let mainInfo = '';
    mainInfo += `<div class="main-info-holder">`;
    this.mainInfo.forEach(elem => {
    mainInfo +=	`<div class="edit-field">
          <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            <span contenteditable="true">${elem}</span>
	      </button>
        </div>`;
    });
    mainInfo += '</div>'
    return mainInfo;
  }
  createEditInfo() {
  	let editInfo = '';
    this.editInfo.forEach(elem => {
      for (let key in elem) {
        editInfo +=	`<div class="edit-field">
        <button href="#" class="${elem[key]}"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          <span>${key}</span>
        </button>
      </div>`
      }
    });
    return  `<div class="scroll-holder">
      <div class="edit-info">
        <div class="edit-field">
          <button href="#" class="delete-btn"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
            <span>phone</span>
            <span>+38 (063) 733 44 55</span>
          </button>
        </div>
        ${editInfo}
        <div class="edit-field">
          <button href="#" class="delete-contact">delete contact</button>
        </div>
      </div>
    </div>
  </div>`
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
    document.querySelector("body").innerHTML = this.createHeader() + this.createMain() + this.createFooter();
  }
}
let editUser = new EditUser();
editUser.render();
