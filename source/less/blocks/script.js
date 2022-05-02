let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toogle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-header__toogle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');

    navToggle.classList.remove('main-header__toogle--closed');
    navToggle.classList.add('main-header__toogle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('main-header__toogle--opened');
    navToggle.classList.add('main-header__toogle--closed');
  }
});
