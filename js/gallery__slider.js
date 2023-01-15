document.addEventListener('DOMContentLoaded', function(){
  const gallerySlider = new Swiper('.gallery__swiper', {
    navigation: {
      prevEl: '.gallery__button-prev',
      nextEl: '.gallery__button-next',
    },
    pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
    },
    allowTouchMove: true,
    nested: true,
    speed: 750,
    initialSlide: 1,
    watchOverflow: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 34,
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 36
      },
      1600: {
        allowTouchMove: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
    }
  });

});
