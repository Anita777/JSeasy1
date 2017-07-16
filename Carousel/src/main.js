
/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
 *
 *
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * Добавьте внизу цифры с текущим активным изображением.
 *
 * 
 * 
 * @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка
 *
 * */

const slides = document.querySelectorAll('li');
let next = document.getElementById('next');
let previous = document.getElementById('previous');

// цифры с текущим активным изображением
let li = document.querySelectorAll('li');
[...li].forEach((elem, ind) =>{
  let h3 = document.createElement('h3');
    let img = document.querySelectorAll('img');
    [...img].forEach((el, i) =>{
      if (ind === i) {
        h3.innerHTML += `<span>Слайд № ${el.getAttribute('alt')}</span>`;
      }
      elem.insertAdjacentElement('beforeend', h3 );
    });
});

// функция определяет текущее изображение
function currentImage() {
  let indSl = 0;
  [...slides].forEach((elem, ind) =>{
    if (elem.style.display === 'block') {
      indSl = ind;
    }
  });
  return indSl;
}

function nextSlide () {
  let ind = currentImage();
  slides[ind + 1].style.display = 'block';
  slides[ind].style.display = 'none';
}

function previousSlide() {
  let ind = currentImage();
  slides[ind - 1].style.display = 'block';
  slides[ind].style.display = 'none';
}

function infinitySlide() {
  let ind = currentImage();
  if (ind === slides.length - 1) {
    slides[ind].style.display = 'none';
    ind = 0;
    slides[ind].style.display = 'block';
  } else {
    slides[ind].style.display = 'none';
    slides[ind + 1].style.display = 'block'; 
  }
}

function firstImage () {
  let ind = currentImage();
  slides[ind].style.display = 'none';
  slides[0].style.display = 'block';
}

previous.onclick = function () {
  infinitySlide()  ;
}

next.onclick = function () {
  infinitySlide();
}
