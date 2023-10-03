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
var swiperMain = new Swiper(".product__slider-main", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".product__arrow-next",
    prevEl: ".product__arrow-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


