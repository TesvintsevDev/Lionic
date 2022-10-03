// let burger = document.querySelector('.burger')
// let menu = document.querySelector('.header-nav')
// let menuLinks = menu.querySelectorAll('.header-nav__link')

// burger.addEventListener('click',

// function() {
//   burger.classList.toggle('burger--active')

//   menu.classList.toggle('header-nav--active')

//   document.body.classList.toggle('stop-scroll')
// })

// menuLinks.forEach(function(el) {
//   el.addEventListener('click', function() {

//     burger.classList.remove('burger--active')

//     menu.classList.remove('header-nav__active')

//     document.body.classList.remove('stop-scroll')
//   })
// })

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', function(){
  menu.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
});
