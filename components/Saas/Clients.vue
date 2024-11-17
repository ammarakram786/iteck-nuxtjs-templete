<template>
  <section :class="`clients style-5 ${padding ? 'section-padding':'pb-100'}`" data-scroll-index="2">
    <div class="section-head text-center mb-40 style-5">
      <h2 class="mb-20">{{ rtl ? 'موثوق بنا من قبل آلاف' : 'Trusted By Thoudsands' }} <span>{{ rtl ? 'العملاء' : 'Business' }}</span> </h2>
      <p>{{ rtl ? 'أكثر من 15000 شركة تثق وتختار Iteck' : 'More than 15,000 companies trust and choose Iteck' }}</p>
    </div>
    <div class="content">
      <div class="clients-slider5">
        <swiper class="swiper-container" :options="swiperOptions" >
          <swiper-slide v-for="(client, i) in clients.row1" :key="i">
            <a href="#" class="img">
              <img :src="client" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <div class="clients-slider5" dir="rtl">
        <swiper class="swiper-container" :options="swiperTwoOptions">
          <swiper-slide v-for="(client, i) in clients.row2" :key="i">
            <a href="#" class="img">
              <img :src="client" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import clients from '../../data/Saas/clients.json';

export default {
  props: ['rtl', 'padding'],
  data() {
    return {
      clients,
      swiperOptions: { 
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 6,
        speed: 6000,
        autoplay: {
          delay: 1,
          disableOnInteraction: true
        },
        loop: true,
        allowTouchMove: false,
        breakpoints: {
          0: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 2
          },
          787: {
            slidesPerView: 3
          },
          991: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 6
          }
        }
      },
      swiperTwoOptions: {
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 6,
        speed: 6000,
        autoplay: {
          delay: 1,
          disableOnInteraction: true
        },
        loop: true,
        allowTouchMove: false,
        breakpoints: {
          0: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 2
          },
          787: {
            slidesPerView: 3
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
