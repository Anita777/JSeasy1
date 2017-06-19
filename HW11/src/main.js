/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь
 - Гость
 - База данных
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 *
 * */
var user = {
  "name": "Paul",
  "lastName": "Carrillo",
  "age": 20
};

var verifiedUser = {
  e_mail: 'jerry84@mail.ru',
  login: 'jey_jey'
};

var guest = {
  register (nameGuest, lastNameGuest, ageGuest) {
    return database.nameUser.push(
      { "name": nameGuest,
        "lastName": lastNameGuest,
        "age": ageGuest
    });
  }
};

var database = {
  password: '1122',
  "nameUser": [
    {
      "name": "Paul",
      "lastName": "Carrillo",
      "age": 20
    },
    {
      "name": "Prince",
      "lastName": "Dejesus",
      "age": 19
    },
    {
      "name": "Carey Bates",
      "age": 21
    },
    {
      "name": "Moses Ballard",
      "age": 17
    }
  ],
  registration () {
    console.log ("Registered guest");
  }
};
//Пользователи знают мыло админа
user.__proto__ = verifiedUser;  
console.log('Users knows the administrator e-mail: ', user.e_mail);
//админ знает пароль от базы данных
verifiedUser.__proto__ = database;
console.log('Admin knows the password from the database: ',verifiedUser.password);
// Гости могут зарегистрироваться в базе данных
guest.register('Ivan', 'Ivanov', 25);
console.log('User added to the database: ', 
            database.nameUser[database.nameUser.length-1]);
guest.__proto__ = database.registration();





