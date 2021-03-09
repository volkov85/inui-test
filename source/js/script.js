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

const infoButton = document.querySelector('.header__profile-info');
const infoButtonClose = document.querySelector('.info__button-close');
const infoPanel = document.querySelector('.info');

infoButton.addEventListener('click', () => {
  infoPanel.classList.toggle('info__opened');
});

infoButtonClose.addEventListener('click', () => {
  infoPanel.classList.remove('info__opened');
});
