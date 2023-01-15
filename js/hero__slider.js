document.addEventListener('DOMContentLoaded', function(){
  const heroSlider = new Swiper('.hero__slider', {
    loop: true,
    allowTouchMove: false,
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
  });
});
