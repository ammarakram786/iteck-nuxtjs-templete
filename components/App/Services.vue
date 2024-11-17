<template>
  <section class="services section-padding bg-white pb-50 style-6">
    <div class="container">
      <div class="section-head text-center style-4 mb-60">
        <small class="title_small"> Software Apps </small>
        <h2 class="mb-20"> Our Top <span> Services </span> </h2>
        <p> Notero intergrate with popular apps. Help you easy to connect and collaboration </p>
      </div>
    </div>
    <div class="content">
      <div class="services-slider position-relative style-6">
        <swiper class="swiper-container" :options="swiperOptions">
          <swiper-slide v-for="(service, index) in services" :key="index">
            <NuxtLink to="/page-services-app" class="service-card style-6">
              <div class="icon">
                <img :src="service.img" alt="" />
              </div>
              <div class="info">
                <h5>{{ service.info }}</h5>
                <div class="text">
                  {{ service.text }}
                </div>
              </div>
            </NuxtLink>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../../data/App/services.json';

export default {
  data() {
    return {
      services,
      swiperOptions: {
        slidesPerView: 6,
        centeredSlides: true,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
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
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 6
          }
        }
      }
    }
  },
}
</script>
