<template>
  <section class="testimonials section-padding bg-gray5 style-5" data-scroll-index="5">
    <div class="container">
      <div class="section-head text-center mb-60 style-5">
        <h2 class="mb-20">{{ rtl ? 'مراجعات' : 'Clients' }} <span>{{ rtl ? 'العملاء' : 'Reviews' }}</span> </h2>
        <p>{{ rtl ? 'لقد أحببت Iteck من آلاف العملاء في جميع أنحاء العالم وحصلت على ثقة من الشركات الكبرى.' : 'Iteck loved from thoudsands customer worldwide and get trusted from big companies.' }}</p>
      </div>
    </div>
    <div class="content">
      <div class="testimonial-slider position-relative style-5">
        <swiper class="swiper-container pb-70" :options="swiperOptions">
          <swiper-slide v-for="(testimonial, i) in testimonialsData" :key="i">
            <a href="#" class="testi-card style-5">
              <div class="stars">
                <i class="fas fa-star" v-for="_, t in Array(testimonial.stars).fill()" :key="t"></i>
              </div>
              <div class="text">
                {{ testimonial.comment }}
              </div>
              <div class="user mt-40 text-center">
                <div class="icon-80 rounded-circle img-cover overflow-hidden m-auto">
                  <img :src="testimonial.author.image" alt="" />
                </div>
                <h6>{{ testimonial.author.name }}</h6>
                <small>{{ testimonial.author.position }}</small>
              </div>
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
import testimonials from '../../data/Saas/testimonials.json';
import testimonialsRTL from '../../data/Saas/testimonials-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    testimonialsData() {
      return this.rtl ? testimonialsRTL : testimonials;
    }
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 0,
        slidesPerView: 4,
        speed: 1000,
        pagination: {
          el: ".testimonial-slider.style-5 .swiper-pagination",
          clickable: true
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
}
</script>
