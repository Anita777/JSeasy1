
const app = {
  appName: 'Тест по программированию',
  questions: [
    {
      name:  "Сколько в JavaScript существует основных типов данных?",
      answers: [
        "5",
        "6",
        "7"
      ],
      rightAnswers: [1]
    }, 
    {
      name:  "Чему равно 2 && 1 && null && 0 && undefined ?",
      answers: [
        "null",
        "false",
        "1"],
      rightAnswers: [0]
    }, 
    {
      name:  "Сколько параметров можно передать функции ?",
      answers:[
        "Ровно столько, сколько указано в определении функции",
        "Сколько указано в определении функции или меньше",
        "Любое количество "
      ],
      rightAnswers: [2]
    } 
  ],

  createLi() {
    return this.new('li');
  },
  createQuestions(question) {
    const li = this.createLi();
    const h3 = this.new('h3');
    h3.textContent = question.name;
    const ul = this.new('ul');
    question.answers.forEach(answer => {
      const htmlAnswer = this.createAnswer(answer);
      ul.appendChild(htmlAnswer);
    });
    li.appendChild(h3);
    li.appendChild(ul);
    return li;
  },
  createAnswer(answer) {
    const liAnswer = this.createLi();
    const label = this.new('label');
    const input = this.new('input');

    input.setAttribute('type', 'checkbox');
    liAnswer.appendChild(input);
    liAnswer.appendChild(label);
    label.textContent = answer;
    return liAnswer;
  },
  render() {
    const body = document.body;
    const main = this.new('main');
    const h1 = this.new('h1');
    const ol = this.new('ol');
    const button = this.new('button');
    const button2 = this.new('button');

    button.onclick = function() {
      var resAnswer;
      const ul = document.querySelectorAll("ul");
      [...ul].forEach((elem, index) => {
        const input = elem.querySelectorAll('input');
        input.forEach((elemIn, indexIn) => {
          if (elemIn.checked) {
            (indexIn === app.questions[index].rightAnswers[0]) ? resAnswer = 'Ответ верный' : resAnswer ='Ответ неверный';
          }
        });
      });
      alert(resAnswer)
    };
    button.textContent = 'Проверить';
    h1.textContent = this.appName;
    main.appendChild(h1);
    main.appendChild(ol);
    main.appendChild(button);
    this.questions.forEach(question => {
      const htmlQuestion = this.createQuestions(question);
      ol.appendChild(htmlQuestion);
    });
    body.appendChild(main);
  },
  new(tag) {
    return document.createElement(tag);
  }
};

app.render();

