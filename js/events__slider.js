document.addEventListener('DOMContentLoaded', function(){

  const eventsSlider = new Swiper('.events__slider', {
    navigation: {
      nextEl: '.events__swiper-button-next',
      prevEl: '.events__swiper-button-prev'
    },
    pagination: {
      el: '.events__pagination',
      type: 'bullets',
      clickable: true,
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    loop: false,
    allowTouchMove: true,
    breakpoints: {
      320: {
      slidesPerView: 1,
      slidesPerView: 1,
      spaceBetween: 34
      },
      577: {
        // allowTouchMove: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
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
