// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min.mjs';
import '../../node_modules/swiper/swiper-bundle.css';

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
          `<div class="swiper-slide">
                <div class="slider-images card">
                    <div class="image-container-1"><img class="image-1" src="${cook.imgUrl}" alt="${cook.name}"></div>
                    <div class="image-container-2">
                        <img class="image-2" src="${topic.previewUrl}" alt="${cook.name}">
                        <h2 class="image-title">${topic.name}</h2>
                        <p class="image-descraption">${topic.area}</p>
                    </div>
                    <div class="image-container-3"><img class="image-3" src="${topic.imgUrl}" alt="${cook.name}"></div>
                </div>
            </div>`
      )

      .join('')
  );
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  // speed: 800,

  pagination: {
    el: '.swiper-pagination',
    // allowSlideNext: true,
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 1500,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
