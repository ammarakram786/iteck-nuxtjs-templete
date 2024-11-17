<template>
  <div class="screenshots style-4" data-scroll-index="4">
    <div class="screenshots-slider style-4">
      <swiper :options="options">
        <swiper-slide v-for="(screenshot, index) in screenshots" :key="index">
          <div class="img">
            <img :src="screenshot" alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <img src="/assets/img/screenshots/hand.png" alt="" class="mob-hand" />
  </div>
</template>

<script>
import screenshots from '../../data/App/screenshots.json';

export default {
  data() {
    return {
      screenshots,
      options: {
        spaceBetween: 0,
        slidesPerView: 5,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        loop: true,
        autoplay: {
          delay: 4000
        },
        speed: 1000,
        centeredSlides: true,
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          787: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          }
        }
      }
    }
  },
}
</script>
