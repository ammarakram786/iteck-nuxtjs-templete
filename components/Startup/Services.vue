<template>
  <section class="services section-padding style-6" data-scroll-index="2">
    <div class="container">
      <div class="section-head mb-40 text-center style-6">
        <template v-if="rtl">
          <h2 class="mb-20">
            استكشف ماذا نقدم من <span> <small>خدمات</small> </span>
          </h2>
          <p>تتضمن استراتيجيتنا التطور المستمر ، لضمان إنتاج مُحسنات محركات بحث استثنائية لـلمشاريع.</p>
        </template>
        <template v-else>
          <h2 class="mb-20">
            Discover our top <span><small>services</small></span>
          </h2>
          <p>Our strategy includes consistently evolving, to ensure we’re producing exceptional SEO for business.</p>
        </template>
      </div>
    </div>
    <div class="content">
      <div class="services-slider position-relative style-6">
        <swiper class="swiper-container" :options="swiperOptions">
          <swiper-slide v-for="(service, index) in servicesData" :key="index">
            <NuxtLink :to="rtl ? 'rtl-page-services' : 'page-services-5'" class="service-card style-6">
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
      <div class="text-center">
        <NuxtLink :to="rtl ? '/rtl-page-services' : 'page-services-5'" class="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold me-3">
          <span>{{ rtl ? "مشاهدة جميع خدماتنا" : "See All Our Services" }} <i class="bi bi-arrow-right ms-1"></i></span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../../data/Startup/services.json';
import servicesRTL from '../../data/Startup/services-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    servicesData() {
      return this.rtl ? servicesRTL : services;
    }
  },
  data() {
    return {
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
