<template>
  <section class="testimonials pt-100 style-11">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-head mb-70 text-center wow fadeInUp">
            <h6 class="color-green text-uppercase"> // User Feedbacks // </h6>
            <h2 class="fs-1"> Worldwide use Iteck to support customers </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="testimonials-slider11 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
          <swiper class="swiper-container" :options="swiperOptions">
            <swiper-slide v-for="(testimonial, idx) in testimonials" :key="idx">
              <div class="testimonial-card">
                <div class="row gx-0">
                  <div class="col-lg-6">
                    <div class="img img-cover">
                      <img src="/assets/img/testimonials/1.jpg" alt="" />
                      <a href="https://www.youtube.com/watch?v=pGbIOC83-So&t=21s" class="play_icon" @click="openVideo">
                        <i class="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="info">
                      <div class="icon">
                        <img src="/assets/img/testimonials/logo1.png" alt="" />
                      </div>
                      <h4> “ Iteck embraces everything we needed when it comes, to asynchronous customer communication.
                        ” </h4>
                      <div class="author">
                        <div class="img icon-50 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                          <img src="/assets/img/testimonials/user7.png" alt="" />
                        </div>
                        <div class="inf">
                          <p> Head Of Idea </p>
                          <h6> Alonso D.Dowson </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="logos-content section-padding wow fadeInUp" data-wow-delay="0.2s">
        <div class="container">
          <div class="logos">
            <div class="row">
              <div class="col-lg-3 col-sm-6 col-6">
                <a href="#" class="logo">
                  <img src="/assets/img/logos/35.png" alt="" />
                </a>
              </div>
              <div class="col-lg-3 col-sm-6 col-6">
                <a href="#" class="logo">
                  <img src="/assets/img/logos/36.png" alt="" />
                </a>
              </div>
              <div class="col-lg-3 col-sm-6 col-6">
                <a href="#" class="logo">
                  <img src="/assets/img/logos/37.png" alt="" />
                </a>
              </div>
              <div class="col-lg-3 col-sm-6 col-6">
                <a href="#" class="logo">
                  <img src="/assets/img/logos/38.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <p> <strong> 1000+ </strong> Happy Sponsors Around The World </p>
        </div>
      </div>
    </div>
    <ModalVideo channel="youtube" videoId="pGbIOC83-So" :isOpen.sync="videoIsOpen" />
  </section>
</template>

<script>
import ModalVideo from '../ModelVideo';
import testimonials from '../../data/HelpDesk/testimonials.json';

export default {
  components: {
    ModalVideo
  },
  data() {
    return {
      videoIsOpen: false,
      testimonials,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
          el: ".testimonials-slider11 .swiper-pagination",
          clickable: true
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 6000
        },
        loop: true
      }
    }
  },
  methods: {
    openVideo(e) {
      e.preventDefault();
      this.videoIsOpen = !this.videoIsOpen
    }
  },
}
</script>
