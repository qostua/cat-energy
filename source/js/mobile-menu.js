let mainNav = document.querySelector('.main-nav');
let mainNavList = document.querySelector('.main-nav__list');
let mainNavToggle = document.querySelector('.main-nav__toggle');
let toggleIcon = document.querySelector('.toggle-icon');

mainNav.classList.remove('main-nav--no-js');
mainNavToggle.classList.remove('main-nav__toggle--no-js');

mainNavToggle.onclick = function() {
  mainNav.classList.toggle('main-nav--open');
  toggleIcon.classList.toggle('toggle-icon--close');
};
