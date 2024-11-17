<template>
  <section class="blog-slider pt-50 pb-50 style-1">
    <div class="container">
      <div :class="`section-head text-center mb-60 style-${styleType}`">
        <h2 class="mb-20">{{ rtl ? 'أخر' : 'Our' }} <span>{{ rtl ? 'الأخبار' : 'Journal' }}</span></h2>
        <div class="text color-666">{{ rtl ? 'احصل على اخر الاخبار من خلال المدونه ناقش وشارك الخبر مع الاصدقاء' : 'Get the latest articles from our journal, writing, discuss and share' }}</div>
      </div>
      <div class="blog-details-slider">
        <swiper class="swiper-container" :options="swiperOptions">
          <swiper-slide v-for="(slide, index) in data" :key="index">
            <div class="content-card">
              <div class="img overlay">
                <img :src="slide.image" alt="" />
              </div>
              <div class="info">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="cont">
                      <small class="date small mb-20"> 
                        <a href="#" class="text-uppercase border-end brd-gray pe-3 me-3">{{ slide.type }}</a>
                        <i class="far fa-clock me-2"></i>{{ rtl ? 'موعد النشر' : 'Posted on' }} <a href="#">{{ slide.time }}</a> 
                      </small>
                      <h2 class="title">
                        <NuxtLink :to='rtl ? "/rtl-page-single-post" : "/page-single-post-5"'>
                          {{ slide.title }}
                        </NuxtLink>
                      </h2>
                      <p class="fs-13px mt-10 text-light text-info">
                        {{ slide.desc }} [...]
                      </p>
                    </div>
                  </div>
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
  </section>
</template>

<script>
import slides from '../../data/Blog/slides.json';
import slidesRTL from '../../data/Blog/slides-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        speed: 1000,
        pagination: {
          el: ".blog-details-slider .swiper-pagination",
          clickable: "true"
        },
        navigation: {
          nextEl: '.blog-details-slider .swiper-button-next',
          prevEl: '.blog-details-slider .swiper-button-prev'
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        loop: true
      }
    }
  },
  computed: {
    data() {
      return this.rtl ? slidesRTL : slides
    }
  }
}
</script>
