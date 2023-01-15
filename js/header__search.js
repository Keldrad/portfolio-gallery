document.querySelector('.header__search-btn').addEventListener('click', function openSeach() {
  document.querySelector('.header__search').classList.add('header__search_visible');
  document.querySelector('.header__search-input').classList.add('header__search-input_visible');
  document.querySelector('.header__search-btn').classList.add('header__search-btn_open');
  document.querySelector('.header-navigation').classList.remove('header-navigation_visible');
  document.querySelector('.header__search-close-btn').classList.remove('header__search-close-btn_disable');
})

document.querySelector('.header__search-close-btn').addEventListener('click', function closeSeach() {
  document.querySelector('.header__search').classList.remove('header__search_visible');
  document.querySelector('.header__search-input').classList.remove('header__search-input_visible');
  document.querySelector('.header__search-btn').classList.remove('header__search-btn_open');
  document.querySelector('.header__search-close-btn').classList.add('header__search-close-btn_disable');
})
