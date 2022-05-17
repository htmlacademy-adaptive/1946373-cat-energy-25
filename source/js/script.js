const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__toggle');

console.log(navMain)
navMain.classList.remove('main-nav--nojs');

console.log(navToggle)
navToggle.classList.remove('main-header__toggle--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');


  navToggle.classList.toggle('main-header__toggle--closed');
  navToggle.classList.toggle('main-header__toggle--opened');

});

