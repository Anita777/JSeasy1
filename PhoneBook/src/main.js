
class PhoneBook {
  constructor () {
    this.userID = 1;
    this.dBase = [];
    this.curFilter = this.dBase;
  }
  transferNumber (numb) {
    for (let i = 0; i < numb.length; i++) {
      if (isNaN(numb[i]) || numb.length != 10) {
        return console.log('Номер введен не верно!');
      }
    }   
    let num= `(${numb.substr(0, 3)})-${numb.substr(3, 2)}`;
    num += `-${numb.substr(5, 2)}-${numb.substr(7, 3)}`;
    return num;
  };

  addUser (options) {
    let id = this.userID;
    let name = options.name;
    let surName = options.surName;
    let age = options.age;
    let phoneNumber = this.transferNumber.call(this,options.phoneNumber);
    this.dBase.push({
      id,
      name,
      surName,
      age,
      phoneNumber
    });
    this.userID++;
    return this.dBase;
  };

  deleteUser (nameDel, surNameDel) {
    return this.dBase = this.dBase.filter(elem => 
      !(elem.name.toLowerCase() == nameDel && elem.surName.toLowerCase() == surNameDel));
  };

  showAllUserByName (nameSearch) {
    return this.dBase.filter(elem => elem.name === nameSearch); 
  };

  changeUser (id, options, newValue) {
    this.dBase.forEach((elem, index) => {
      if(elem.id === id){
        if (options.phoneNumber) {
          newValue =  transferNumber.call(this, newValue);
        }
        return elem[options] = newValue[0].toUpperCase() + newValue.substr(1);
        }
    });
    return this.dBase;
  };

  sortUser (options) {
   this.curFilter = [...this.dBase];
    return  this.curFilter.sort((a, b) => (a[options] > b[options] ? 1 : -1));

  };

  filterUser (options, value) {
    if(options.phoneNumber) {
      value = transferNumber.call(this, value);
    }
    return this.curFilter = this.dBase.filter(elem => elem[options] === value[0] .toUpperCase() + value.substr(1));
  };
}

var myPhomeBook = new PhoneBook();

let addUser1 = {
  name: "Rowe",
  surName: "Bolton",
  age: 52,
  phoneNumber: "0993314525"
};
let addUser2 = {
  name: "Moses",
  surName: "Ballard",
  age: 41,
  phoneNumber: "0990125454"
};
let addUser3 = {
  name: "Kelly",
  surName: "Rork",
  age: 17,
  phoneNumber: "0990584454"
};

myPhomeBook.addUser(addUser1);
myPhomeBook.addUser(addUser2);
console.log('addUser', myPhomeBook.addUser(addUser3));
console.log('showAllUserByName', myPhomeBook.showAllUserByName('Moses'));
console.log('changeUser', myPhomeBook.changeUser(1, 'name', 'john'));
//console.log('deleteUser', myPhomeBook.deleteUser('kelly', 'rork'));
console.log('filterUser', myPhomeBook.filterUser('name', 'john'));
console.log('sortUser', myPhomeBook.sortUser('phoneNumber'));
console.log('sortUser', myPhomeBook.sortUser('name'));