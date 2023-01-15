document.addEventListener('DOMContentLoaded', function(){
// выбор всех объектов с классом кнопки и ожидание события клик
  document.querySelectorAll('.header-down__btn').forEach(function(openMenuItem) {
    openMenuItem.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.artbtn

// изменение класса кнопки на активный
      document.querySelectorAll('.header-down__btn').forEach(function(headerBtns){
        headerBtns.classList.remove('header-down__btn_open')
      })
      event.currentTarget.classList.add('header-down__btn_open')

// замена карточки стилей на активный
      document.querySelectorAll('.dropdown').forEach(function(headerDropdown) {
        headerDropdown.classList.remove('dropdown_visible')
      })
      document.querySelector(`[data-artstyle="${path}"]`).classList.add('dropdown_visible')
    })
  })

// закрывание меню при клике в другой области
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-down__menu")) {
      document.querySelectorAll(".dropdown").forEach(el => {
          el.classList.remove("dropdown_visible");
      })
       document.querySelectorAll(".header-down__btn").forEach(el => {
          el.classList.remove("header-down__btn_open");
      });
    }
  })
})
