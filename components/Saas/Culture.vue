<template>
  <section class="culture section-padding style-5">
    <div class="section-head text-center mb-70 style-5">
      <h2 class="mb-20">{{ rtl ? 'اكتشف' : 'Discovery Our' }} <span>{{ rtl ? 'ثقافتنا' : 'Culture' }}</span> </h2>
      <p>{{ rtl ? 'تعد ثقافة الشركة جزءًا مهمًا من أي عمل تجاري' : 'Company’s culture is a part important of any business' }}</p>
    </div>
    <div class="content">
      <div class="culture-slider position-relative pb-80 style-5">
        <swiper
          class="swiper-container"
          :dir="rtl ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <a @click="showGallery($event, index)" href="#" class="culture-card d-block">
              <img :src="slide" alt="" />
              <span @click="showGallery($event, index)" class="overlay"></span>
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
      <no-ssr>
        <LightGallery
          :dir="rtl ? 'rtl' : 'ltr'"
          :images="gallery"
          :index="index"
          :disable-scroll="true"
          @close="index = null"
        />
      </no-ssr>
    </div>
  </section>
</template>

<script>
import slides from '../../data/Saas/culture.json';

export default {
  props: ['rtl'],
  data() {
    return {
      slides,
      index: null,
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: "true"
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
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
            slidesPerView: 2
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
  computed: {
    gallery() {
      return this.slides.map(slide => ({ url: slide }))
    }
  },
  methods: {
    showGallery(e, i) {
      e.preventDefault();
      this.index = i;
    }
  },
}
</script>
