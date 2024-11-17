<template>
  <section class="portfolio section-padding bg-gray style-1" data-scroll-index="4">
    <div class="container">
      <div class="row">
        <div class="col offset-lg-1">
          <div class="section-head mb-60">
            <h6 class="color-main text-uppercase wow fadeInUp">Portfolio</h6>
            <h2 class="wow fadeInUp">
              Latest Projects <span class="fw-normal">From Our Team</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="content wow fadeIn slow">
        <div class="portfolio-slider">
          <swiper class="swiper-container" :options="swiperOptions">
            <swiper-slide v-for="(portfolio, index) in portfolios" :key="index">
              <div class="portfolio-card">
                <div class="img">
                  <img :src="portfolio.image" alt="" />
                </div>
                <div class="info">
                  <h5>
                    <NuxtLink to="/page-single-project-5">
                      {{ portfolio.title }}
                    </NuxtLink>
                  </h5>
                  <small class="d-block color-main text-uppercase">
                    <a href="#" v-for="(type, i) in portfolio.types" class="me-1" :key="i">{{ type }}</a>
                  </small>
                  <div class="text">
                    {{ portfolio.text }}
                  </div>
                  <div class="tags">
                    <a href="#" class="me-1" v-for="(tag, i) in portfolio.tags" :key="i">{{ tag }}</a>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <img src="/assets/img/projects/prog/shap_r.png" alt="" class="shap_r" />
    <img src="/assets/img/projects/prog/shap_l.png" alt="" class="shap_l" />
  </section>
</template>

<script>
import portfolios from '../../data/Digital/portfolio.json';

export default {
  data() {
    return {
      portfolios,
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
          el: ".portfolio-slider .swiper-pagination"
        },
        navigation: {
          nextEl: '.portfolio-slider .swiper-button-next',
          prevEl: '.portfolio-slider .swiper-button-prev'
        },
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
            slidesPerView: 2
          },
          787: {
            slidesPerView: 2
          },
          991: {
            slidesPerView: 3
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
