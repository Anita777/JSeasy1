
// Task 1

const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basic
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
// VERSION 1

function parseString (str) {
  let homeDir = './JavaScript-Basic',
      appDir = 'fixtures/src',
      appName = 'app.js';
  let newStr = str.replace(/%%HOMEDIR%%/g, homeDir).replace(/%%APP_DIR%%/g, appDir).replace(/%%APPNAME%%/g, appName);
  console.log(newStr);
}
parseString (someWebpackModule);

/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class ??
 *
 * */
 
//TASK 2 используя class
class Human {
  constructor(options) {
    this.name = options.name,
    this.age = options.age,
    this.sex = options.sex,
    this.height = options.height,
    this.weight = options.weight
  }
  work () {
    console.log(this.name,' : I\'m working');
  }
  watchSerials  () {
    console.log(this.name,' : I\'m watching serials');
  }
}

class  Worker extends Human {
  constructor (options, placeOfWork, salary) {
    super(options);
    this.placeOfWork = options.placeOfWork,
    this.salary = options.salary
  }
}

class Student extends Human {
  constructor (options, placeOfStudy, scholarship) {
    super(options);
    this.placeOfStudy = options.placeOfStudy,
    this.scholarship = options.scholarship
  }
}

let objStudent = { name:'John',
                   age: 20,
                   sex:'male',
                   height: 1.85,
                   weight: 100,
                   placeOfStudy: 'University of Oxford',
                   scholarship: 200
                 };
let student = new Student(objStudent);
console.log(student);
student.watchSerials();

let objWorker = { name:'Anna',
                  age: 33,
                  sex:'female',
                  height: 1.7,
                  weight: 60,
                  placeOfWork: 'Opera',
                  salary: 20000
                };
let worker = new Worker(objWorker);
console.log(worker);
worker.work();

/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */


let startTimer = () => {
  let timer = 1000;
  let serverResponse = i => {
    return setTimeout(function() {
     // console.log('zzzz');
      console.log(i);
    }, (timer = timer / 2));
  };
  for (let i = 10; i >= 1; i--) {
   // timer = timer * i;
    timer = timer * 2;
    serverResponse(i);
  }
};

startTimer();

// @ SUPER

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 * 
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз), 
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */
