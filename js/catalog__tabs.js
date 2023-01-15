
document.addEventListener('DOMContentLoaded', function(){
// выбор всех объектов с классом кнопки и ожидание события клик
  document.querySelectorAll('.artists-list__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

// изменение класса кнопки на активный
      document.querySelectorAll('.artists-list__button').forEach(function(catalogBtns){
        catalogBtns.classList.remove('artists-list__button_active')
      })
      event.currentTarget.classList.add('artists-list__button_active')


// замена карточки художника
      document.querySelectorAll('.artist__tab').forEach(function(tabArtist) {
        tabArtist.classList.remove('artist__tab_active')
      })
      document.querySelector(`[data-artist="${path}"]`).classList.add('artist__tab_active')

    })

  })
})

