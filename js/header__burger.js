document.querySelector('.header__burger').addEventListener('click', function burgerOpen() {
  document.querySelector('.header-navigation').classList.toggle('header-navigation_visible');
  document.querySelector('.body').classList.toggle('body-noscroll');
  document.querySelector('.header__burger').classList.toggle('header__burger_activate');
})

const burgerLinks = document.querySelectorAll('.burger-link');
burgerLinks.forEach(element => {
  element.addEventListener('click', function burgerClose() {
    setTimeout(() => {
      document.querySelector('.header-navigation').classList.remove('header-navigation_visible');
      document.querySelector('.body').classList.remove('body-noscroll');
      document.querySelector('.header__burger').classList.remove('header__burger_activate');
    }, 600);
  })
});

