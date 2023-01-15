document.querySelector('.header__burger').addEventListener('click', function(burgerOpen) {
  document.querySelector('.header-navigation').classList.toggle('header-navigation_visible');
  document.querySelector('.body').classList.toggle('body-noscroll');
  document.querySelector('.header__burger').classList.toggle('header__burger_activate');
})