const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__toggle');


navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-header__toggle--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');

  navToggle.classList.toggle('main-header__toggle--opened');
  navToggle.classList.toggle('main-header__toggle--closed');
});

