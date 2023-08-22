// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// import 'swiper/swiper-bundle.min.css';
import axios from 'axios';
import Swiper from 'swiper/swiper-bundle.min.mjs';
import '../../node_modules/swiper/swiper-bundle.css';

const BASE_URL = `https://tasty-treats-backend.p.goit.global/api/events`;

async function fetchMasterClass() {
  try {
    const response = await axios.get(BASE_URL);

    if (response.status === 404) {
      throw new Error(response.status);
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('error');
  }
}

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
          `<div class="swiper-slide" id="twist" style="width: 515px;">
                <div class="slider-images card" style="display: flex; gap: 16px; width: 320px; margin-right: 10px;">

                    <div class="image-container-1" style="width: 122px; height: 305px;">
										<img class="image-1" style="width: 109px;"src="${cook.imgUrl}" alt="${cook.name}">
										</div>

                    <div class="image-container-2" style=" width: 200px; border-radius: 15px;border: 1px solid rgba(155, 181, 55, 0.3);background: #050505; position: relative;">
                        <img class="image-2" style="width: 150px; height: 150px; padding: 56px 22px 82px 21px;" src="${topic.previewUrl}" alt="${cook.name}">
                        <h2 class="image-title" style="  width: 144px; color: rgba(248, 248, 248, 0.6);text-align: center;bottom: 30px;padding: 222px 28px 30px 28px;margin-bottom: 4px;position: absolute;z-index: 1;">${topic.name}</h2>
												
                      <p class="image-description" style=" width: 24px;color: rgba(248, 248, 248, 0.2);font-size: 8px;font-style: normal;line-height: 12px;right: 88px;bottom: 14px;position: absolute;z-index: 1;">${topic.area}</p>
                    </div>

                    <div class="image-container-3" style="width: 200px;height: 280px;border-radius: 15px;border: 1px solid rgba(155, 181, 55, 0.3);background: #050505;">
										<img class="image-3" style="" src="${topic.imgUrl}" alt="${cook.name}">
										</div>

                </div>
            </div>`
      )

      .join('')
  );
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 800,

  pagination: {
    el: '.swiper-pagination',
    allowSlideNext: true,
    clickable: true,
    dynamicBullets: true,
  },
  // autoplay: {
  //   delay: 1500,
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
