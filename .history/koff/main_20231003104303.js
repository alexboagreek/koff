import 'normalize.css';
import './style.scss';

import Swiper from 'swiper';
import 'swiper/css';

var swiperThumbnails = new Swiper(".product__slider-thumbnails", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product__slider-main", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


