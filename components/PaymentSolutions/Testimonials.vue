<template>
  <section class="testimonials section-padding style-14">
    <div class="container">
      <div class="section-head mb-100">
        <p class="color-red1 text-uppercase fw-bold mb-10"> testimonials </p>
        <h2 class="fs-1"> Users Feedback </h2>
      </div>
      <div class="content">
        <div class="testimonials-slider14">
          <swiper class="overflow-visible" :options="swiperOptions">
            <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
              <div class="testi-card">
                <div class="icon img-contain">
                  <img :src="testimonial.image" alt="" />
                </div>
                <div class="user-img img-cover">
                  <img :src="testimonial.pic" alt="" />
                </div>
                <div class="info">
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="text">
                    “ {{ testimonial.text }} ”
                  </div>
                  <h6> {{ testimonial.author }} </h6>
                  <p class="color-red1 text-uppercase"> {{ testimonial.position }} </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import testimonials from '../../data/PaymentSolutions/testimonials.json';

export default {
  data() {
    return {
      testimonials,
      swiperOptions: {
        spaceBetween: 50,
        speed: 1000,
        autoplay: {
          delay: 5000
        },
        loop: false,
        pagination: false,
        navigation: false,
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
