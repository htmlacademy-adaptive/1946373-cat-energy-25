const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__toggle');

console.log(navMain)
navMain.classList.remove('main-nav--nojs');

console.log(navToggle)
navToggle.classList.remove('main-header__toggle--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');


  navToggle.classList.toggle('main-header__toggle--opened');
  navToggle.classList.toggle('main-header__toggle--closed');
});


// let navMain = document.querySelector('.main-nav');
// let navToggle = document.querySelector('.main-header__toogle');

// console.log(navMain)
// navMain.classList.remove('main-nav--nojs');
// console.log(navToggle)
// navToggle.classList.remove('main-header__toogle--nojs');

// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-navigation--closed');

//     navToggle.classList.remove('main-header__toogle--closed');
//     navToggle.classList.add('main-header__toogle--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navToggle.classList.remove('main-header__toogle--opened');
//     navToggle.classList.add('main-header__toogle--closed');
//   }
// });
