<template>
  <section class="services section-padding bg-white pb-50 style-6">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-head text-center mb-60 style-5">
            <h2 class="mb-20">{{ rtl ? 'اهم' : 'Our Top' }} <span>{{ rtl ? 'خدماتنا' : 'Services' }}</span> </h2>
            <p>
              {{ rtl ? 'تعتبر Iteck لوحة تحكم مصدر قوة عندما يتعلق الأمر بقائمة الميزات. يضمن ذلك حصولك على كل الوظائف التي تحتاجها لبناء سوقك وتشغيله وتوسيعه' : 'Iteck Dashboard is a powerhouse when it comes to the feature list. This ensures you have every functionality you need to build, run, and expand your marketplace' }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="services-slider position-relative style-6">
        <swiper class="swiper-container" :dir="rtl ? 'rtl' : 'ltr'" :options="swiperOptions">
          <swiper-slide v-for="(service, index) in servicesData" :key="index">
            <NuxtLink to="/page-services-5" class="service-card style-6">
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
import services from '../../data/Saas/services.json';
import servicesRTL from '../../data/Saas/services-rtl.json';

export default {
  props: ['rtl'],
  data() {
    return {
      servicesData: this.rtl ? servicesRTL : services,
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
