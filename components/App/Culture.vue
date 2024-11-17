<template>
  <section class="culture section-padding style-5">
    <div class="section-head text-center style-4 mb-60">
      <small class="title_small">Our Philosophy</small>
      <h2 class="mb-20">Discover our <span>Culture</span> </h2>
      <p>More 15,000 Companies & partners trusted & choice Iteck</p>
    </div>
    <div class="content">
      <div class="culture-slider position-relative pb-80 style-5">
        <swiper class="swiper-container" :options="swiperOptions">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <a :href="slide" class="culture-card d-block" @click="showGallery($event, index)">
              <img :src="slide" alt="" />
              <span class="overlay"></span>
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
      <no-ssr>
        <LightGallery
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
import slides from '../../data/App/culture.json';

export default {
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
  }
}
</script>
