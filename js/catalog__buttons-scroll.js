const artists = document.querySelectorAll('.artists-list__button')

for (let artist of artists) {
artist.addEventListener("click", function(event) {
  document.querySelector('#artist').scrollIntoView({
    })
  })
}
