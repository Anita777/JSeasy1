class User {
  constructor(user) {
    this.user = user;
    this.body = document.body;
    this.optionsLine = {
      message:  'comment',
      call: 'earphone',
      video: 'facetime-video',
      mail: 'envelope'
    };
    this.optionsTable = ['Notes', 'Send message', 'Share contact', 'Add to favorites', 'Share my location', 'Block this caller'];
    this.navigation = {
      Contacts: ['index.html', 'search', 'tab'],
      Keypad: ['keypad.html', 'th', 'tab'],
      'Edit contact': ['edit-contact.html', 'pencil', 'tab'],
      User: ['user.html', 'user', 'tab active'],
      'Add user': ['add-user.html', 'plus', 'tab']
    };
  }
  createHeader() {
    return `<header class="header">
    <div class="container top-radius">
      <div class="user-top-line">
        <a href ="index.html" id ="backToContacts">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Contacts
        </a>
        <a href ="edit-contact.html" id ="editContact">Edit</a>
      </div>
    </div>
  </header>`;
}
	fillData() {
		let string = '';
		for (let key in this.user) {
			console.log(this.user)
			let data = this.user[key];
			if (key !== '_id' && key !== 'fullName' && key !== 'name' && key !== "lastname" && key !== "created") {
				string += `<div class="user-data">
					<h3>${key}</h3>
					<div> ${data}</div>
				</div>`
			}
		}
		return string;
	}

  createMain() {
  	let main = '',
        userName = '',
        options = '';
    for (let key in this.optionsLine) {
      userName += `<div class="${key}">
        <div class= "options-icon"><span class="icon glyphicon glyphicon-${this.optionsLine[key]}" aria-hidden="true"></span></div>
        <span class = "options-text">${key}</span>
       </div>`;
    }
    this.optionsTable.forEach(elem => {
      options += `<div class ="options-item"><a href="#">${elem}</a></div>`;
    })
    main += `<main class="main">
      <div class="container">
        <img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">
          <div class="user-name">>User Name</div>
				<div class="options-line">
				${userName}	
				</div>
				<div class="tel-number">
					<h3>mobile</h3>
					<div> +38 (093) 989 89 89</div>
				</div>
				<div class="tel-number">
					<h3>home</h3>
					<div> +38 (093) 989 89 89</div>
				</div>
				<div class="options-table">
                ${this.fillData()}
				${options}	

				</div>
			</div>
		</main>`
		return main
	}

/*
	events() {
		this.edit = document.getElementById('editContact');
		this.back = document.getElementById('backToContacts')

		//----Open page edit-contact on click on Edit-------//
		this.edit.addEventListener('click', e => {
			e.preventDefault();
			let myEditContact = new EditContact(this.user);
			myEditContact.render();
		});

		//----Open page index.html on click on Back--------//
		this.back.addEventListener('click', e => {
			e.preventDefault();
			myTelephoneBook.render();
		});
	}
*/

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
  events() {

  }
  render() {
	document.querySelector("body").innerHTML = this.createHeader() + this.createMain() + this.createFooter();
    this.events();
    console.log(this.user)

  }
}
let user = new User();
user.render();