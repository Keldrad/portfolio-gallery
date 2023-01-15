let swiperSlides = document.querySelector(".gallery").querySelectorAll(".swiper-slide");

let modal = document.querySelector(".gallery-modal");

swiperSlides.forEach(el => {
  el.addEventListener("click", function() {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");
    document.querySelector('.gallery-modal').classList.add('modal-active')
    document.querySelector('.body').classList.add('body-noscroll');
    modal.querySelector("img").setAttribute("src", link);
  })
})

document.querySelector('.gallery-modal__close-btn').addEventListener('click', closeModal);

let modalWindow = document.querySelector(".gallery-modal__content");

modalWindow.addEventListener('click', event => {
  event._modalClick = true;
});

modal.addEventListener('click', event => {
  if(event._modalClick) {
    console.log('клик по модалке')
    return;
  }
  closeModal();
});

function closeModal() {
  document.querySelector('.gallery-modal').classList.remove('modal-active')
  document.querySelector('.body').classList.remove('body-noscroll');
}
