<template>
  <div class="col-lg-6">
    <div class="product-slider">
      <swiper class="swiper-container gallery-thumbs" :options="swiperThumbsOptions" ref="swiperThumbs">
        <swiper-slide v-for="(image, index) in productImages" :key="index">
          <div class="img">
            <img :src="image" alt="" />
          </div>
        </swiper-slide>
      </swiper>
      <swiper class="swiper-container gallery-top" :options="swiperTopOptions" ref="swiperTop">
        <swiper-slide v-for="(image, index) in productImages" :key="index">
          <div class="img">
            <img :src="image" alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: ['productImages'],
  data() {
    return {
      swiperThumbsOptions: {
        spaceBetween: 20,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: "vertical"
      },
      swiperTopOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: false,
        thumbs: {
          swiper: null
        },
      }
    }
  },
  mounted() {
    const swiperTop = this.$refs.swiperTop.$swiper;
    const swiperThumbs = this.$refs.swiperThumbs.$swiper;
    swiperTop.controller.control = swiperThumbs;
    swiperThumbs.controller.control = swiperTop;
    this.swiperTopOptions.thumbs.swiper = swiperThumbs;
  },
}
</script>
