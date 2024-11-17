<template>
  <section class="careers-images pb-100">
    <div class="section-head text-center mb-60 style-5">
      <h2 class="mb-20"> We&apos;re Looking For <span> Talented People </span> </h2>
      <div class="text color-666">More than 15,000 companies trust and choose Itech</div>
      <button class="btn bg-blue5 sm-butn text-white hover-darkBlue mt-4 rounded-pill">
        <span>See All Positions</span>
      </button>
    </div>
    <div class="imgs-content">
      <div class="imgs-content-slider mb-5">
        <swiper class="swiper-container" :options="swiperOptions">
          <swiper-slide v-for="(image, index) in images.ltr" :key="index">
            <div class="img img-cover radius-5 overflow-hidden">
              <img :src="image" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="imgs-content-slider" dir="rtl">
        <swiper class="swiper-container" :options="swiperOptions">
          <swiper-slide v-for="(image, index) in images.rtl" :key="index">
            <div class="img img-cover radius-5 overflow-hidden">
              <img :src="image" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import images from '../../../data/Style2/images.json';

export default {
  data() {
    return {
      images,
      swiperOptions: {
        spaceBetween: 50,
        speed: 10000,
        autoplay: {
          delay: 1
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 1
          },
          787: {
            slidesPerView: 1
          },
          991: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }
      }
    }
  },
}
</script>
