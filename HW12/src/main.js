/*Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

let ctx1 = {
  req: {
    PORT: 30303,
    url: 'https://server.kh.ua/'
  },
  res: {
    status: 1111,
    message: 'Server is not connected. Deploy is not available',
    header: {
      'content-type': 'application/json'
    }
  }
};
/*
function random (ctx, next) {
  let argCTX = ctx;
  let functionNext = next;
  return function () {
    functionNext();
    console.log(argCTX);
  }
}
function Http() {

};

Http.prototype.createServer = function (funcTransmitted) {
  if (!this.funсTransmitted) { this.funcTransmitted = funcTransmitted; }
  return this;
};

Http.prototype.listen = function (PORT, host) {
  console.log(`Server running on https: //${host}: ${PORT}`);
  this.funcTransmitted();
  return this;
};

const server = new Http().createServer(random(ctx1, function () { 
  console.log('hello, I\'m server') })).listen(30304, 'localhost');
console.log(server);
*/
function Http() { }
Http.prototype.createServer = function(fn) {
  let ctx = {
    req: {
      port: 3000,
      url: 'https://google.com'
    },
    res: {
      status: 200,
      message: 'ok',
      header: {
        'content-type': 'application/json'
      }
    }
  }
  this.fn = () => {
    fn.call(this, ctx, () => { })
  }
  return this;
}

Http.prototype.listen = function(PORT, host) {
  console.log(`Server running on https://${host}:${PORT}`)
  this.fn();
}

const server = new Http().createServer(function(ctx, next) {
  console.log(ctx);
}).listen(3000, 'localhost');

// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплатой, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

function Human(name, age, sex, height, weight) {
  this.name = name,
  this.age = age,
  this.sex = sex,
  this.height = height,
  this.weight = weight
}

function Worker(placeOfWork, salary, name, age, sex, height, weight) {
  Human.call(this, name, age, sex, height, weight);
  this.placeOfWork = placeOfWork,
  this.salary = salary
}
function Student(placeOfStudy, scholarship, name, age, sex, height, weight) {
  Human.call(this, name, age, sex, height, weight);
  this.placeOfStudy = placeOfStudy,
  this.scholarship = scholarship
}

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.work = function () {
  console.log(this.name,' : I\'m working');
}
Student.prototype = Object.create(Human.prototype);
Student.prototype.watchSerials = function () {
  console.log('I\'m watching serials');
}

let student = new Student('University of Oxford', 200, 'John', 20, 'male', 1.85, 100);
student.watchSerials();
console.log(student);
let worker = new Worker('Opera', 20000, 'Anna', 33, 'female', 1.7, 60);
console.log(worker);
worker.work();

// @SUPER

/*
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
*/
function wrapper(fn) {
  return (...args) => {
    console.log(args);
    fn.apply(this, args)
  }
}


