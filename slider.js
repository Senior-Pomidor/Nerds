
let slides = document.querySelectorAll('.slide');
let sliderControls = document.querySelectorAll('.slider__radio');
let activeClass = 'slider__slide_active';
let activeIndex = 0;
//нужно для того чтобы первый слайдер был активным при загрузке страницы
slides[activeIndex].classList.add(activeClass);

for(let i = 0; i < slides.length; i++) {
   //навешивает обработчик на каждую радиокнопку
   sliderControls[i].addEventListener('click', function(evt) {
      evt.preventDefault()
      // slides[i].classList.add(activeClass);
      // slides[activeIndex].classList.remove(activeClass);
      // activeIndex = i;
   });
}

let next = document.querySelector('.next')

function nextSlide() {
   slides[activeIndex].classList.remove(activeClass);
   // sliderControls[activeIndex].removeAttribute('checked', '');

   if(activeIndex >= slides.length - 1) {
      activeIndex = -1
   }
   activeIndex++

   slides[activeIndex].classList.add(activeClass);

   // sliderControls[activeIndex].setAttribute('checked', '');
   console.log(activeIndex)
}

setInterval(function() {
  document.querySelector('.next').click();
}, 4000)