import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.css';

import { fetchMasterClass } from './tastyApi';

fetchMasterClass()
  .then(data => {
    createMarkupSwiper(data);
  })
  .catch(error => console.log(error));

function createMarkupSwiper(arrSliders) {
  const swiperWrapperEl = document.querySelector('.swiper-wrapper');

  swiperWrapperEl.insertAdjacentHTML(
    'beforeend',
    arrSliders
      .map(
        ({ cook, topic }) =>
          `<div class="hero_swiper-slide card" id="twist">
                <div class=" hero_slider-images">
                    <div class="hero_image-container-1"><img class="image-1" src=${cook.imgUrl} alt=${cook.name}></div>
                    <div class="hero_image-container-2">
                        <img class="hero_image-2" src=${topic.previewUrl} alt=${cook.name}>
                        <h2 class="hero_image-title">${topic.name}</h2>
                        <p class="hero_image-descraption">${topic.area}</p>
                    </div>
                    <div class="hero_image-container-3"><img class="image-3" src=${topic.imgUrl} alt=${cook.name}></div>
                </div>
            </div>`
      )

      .join('')
  );
}

const swiper = new Swiper('.swiper', {
  modules: [Pagination, Navigation],
  allowSlideNext: true,
  direction: 'horizontal',
  loop: true,
  // speed: 800,

  pagination: {
    el: '.swiper-pagination',
    // allowSlideNext: true,
    clickable: true,
    // dynamicBullets: true,
  },
  autoplay: {
    delay: 1500,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
