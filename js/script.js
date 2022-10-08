const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', function(){
  menu.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
});
