<template>
  <section class="features style-7 section-padding">
    <div class="container">
      <div class="section-head text-center style-4 mb-40">
        <div class="top-title mb-10">
          <img src="/assets/img/line_l.png" alt="" />
          <h5> Features </h5>
          <img src="/assets/img/line_r.png" alt="" />
        </div>
        <h2 class="">
          Built With Best <span> Features </span> <br /> & Good UX
        </h2>
      </div>
    </div>
    <div class="content">
      <div class="features-slider7">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(feature, index) in features" :key="index">
            <a href="#" class="features-card style-7">
              <div class="icon">
                <img :src="feature.image" alt="" />
              </div>
              <div class="info">
                <p class="color-999"> Features {{feature.id}} </p>
                <h5> {{feature.title.part1}} <br /> {{feature.title.part2}} </h5>
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <div class="btns text-center mt-10">
        <a href="#0" class="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4 mb-4 mb-lg-0">
          <small> Learn More <i class="fas fa-long-arrow-alt-right"></i> </small>
        </a>
        <a href="#0" class="btn btn-icon-circle rounded-pill bg-white fw-bold me-4">
          <small> Purchase Now <i class="fas fa-long-arrow-alt-right bg-light"></i> </small>
        </a>
      </div>
    </div>
    <img src="/assets/img/feat_circle.png" alt="" class="img-circle rotate-center" />
  </section>
</template>

<script>
import features from '../../data/ITCreative/features.json';

export default {
  data() {
    return {
      features,
      swiperOptions: {
        spaceBetween: 50,
        centeredSlides: true,
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
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }
      }
    }
  },
}
</script>
