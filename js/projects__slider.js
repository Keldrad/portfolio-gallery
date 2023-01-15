document.addEventListener('DOMContentLoaded', function(){

  const projectsSlider = new Swiper('.projects__slider', {
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev'
    },
    // centeredSlides: true,
    allowTouchMove: true,
    watchOverflow: true,
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    breakpoints: {
      320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 17
      },
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },
      1600: {
        allowTouchMove: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
    },

  });

});
