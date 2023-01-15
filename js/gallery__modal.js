let swiperSlides = document.querySelector(".gallery").querySelectorAll(".swiper-slide");

let modal = document.querySelector(".gallery-modal");

// console.log(swiperSlides)
swiperSlides.forEach(el => {
  el.addEventListener("click", function() {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");
//   console.log(modal.querySelector("img"));
//   console.log(link);
//   animation(modal, "modal-active", "play");
    document.querySelector('.gallery-modal').classList.add('modal-active')
    document.querySelector('.body').classList.add('body-noscroll');
    modal.querySelector("img").setAttribute("src", link);
  })
})


  document.querySelector('.gallery-modal__close-btn').addEventListener('click', function() {
  document.querySelector('.gallery-modal').classList.remove('modal-active')
  document.querySelector('.body').classList.remove('body-noscroll');

})