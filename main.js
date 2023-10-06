import "normalize.css";
import "./style.scss";

import { Header } from "./modules/Header/Header";

import Navigo from "navigo";

const productSlider = () => {
  Promise.all([
    import("swiper/modules"),
    import("swiper"),
    import("swiper/css"),
  ]).then(([{ Navigation, Thumbs }, Swiper]) => {
    const swiperThumbnails = new Swiper.default(".product__slider-thumbnails", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper.default(".product__slider-main", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".product__arrow-next",
        prevEl: ".product__arrow-prev",
      },
      modules: [Navigation, Thumbs],
      thumbs: {
        swiper: swiperThumbnails,
      },
    });
  });
};

const init = () => {

  new Header().mount();
  
  productSlider();

  const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

  router
    .on("/", () => {
      console.log("Main...");
    })
    .on("/category", () => {console.log('category');})
    .on("/favorite", () => {console.log('favorite');})
    .on("/search", () => {console.log('search');})
    .on("/product/:id", () => {})
    .on("/cart", () => {})
    .on("/order", () => {})
    .on("/category", () => {})
    .notFound(() => {
      console.log(404);
    });
  router.resolve();
};

init();
