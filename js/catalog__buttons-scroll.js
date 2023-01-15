// const mediaQuery = window.matchMedia('(max-width: 1599px)')
// function handleTabletChange(e) {
  // if (e.matches) {
    const artists = document.querySelectorAll('.artists-list__button')
  
    for (let artist of artists) {
    artist.addEventListener("click", function(event) {
      document.querySelector('#artist').scrollIntoView({
        })
      })
    }

  // }
// }
// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)