<template>
  <section class="testimonials style-7 section-padding">
    <div class="container">
      <div class="section-head text-center style-4 mb-80">
        <div class="top-title mb-10">
          <img src="/assets/img/line_l.png" alt="" />
          <h5> Feedbacks </h5>
          <img src="/assets/img/line_r.png" alt="" />
        </div>
        <h2 class="">
          1M+ Happy <span> Users Around </span> <br /> From Worlds
        </h2>
      </div>
      <div class="testimonials-slider7 position-relative overflow-hidden">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="content">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="testi-card">
                    <div class="text">
                      “{{ testimonial.text }}”
                    </div>
                    <div class="author">
                      <div class="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                        <img :src="testimonial.image" alt="" />
                      </div>
                      <div class="inf">
                        <p> Head Of Idea </p>
                        <h6>{{ testimonial.author }}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="get-qoute-banner">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="info">
              <p> Anytime you can make request to us </p>
              <h6> Everything You Need To Manage Business </h6>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 d-none d-lg-block">
            <div class="img">
              <img src="/assets/img/testimonials/banner7.png" alt="" />
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="btns text-lg-end">
              <a href="#0" class="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white">
                <small> Get A Quote <i class="fas fa-long-arrow-alt-right"></i> </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/testimonials/testi7_back.png" alt="" class="img_back slide_up_down" />
    <img src="/assets/img/testimonials/testi7_qout.png" alt="" class="testi_qout" />
  </section>
</template>

<script>
import testimonials from '../../data/ITCreative/testimonials.json';

export default {
  data() {
    return {
      testimonials,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 5000
        },
        loop: true
      }
    }
  },
}
</script>