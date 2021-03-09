let offerSwiper = new Swiper(`.swiper-container`, {
  slidesPerView: 4,
  grabCursor: true,
  centeredSlides: false,
  centeredSlidesBounds: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: `.offer__slider-button--next`,
    prevEl: `.offer__slider-button--prev`
  }
});
