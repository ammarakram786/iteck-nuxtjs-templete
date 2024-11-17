<template>
  <section class="services style-8 section-padding">
    <div class="container">
      <div class="section-head style-8 text-center mb-80 wow fadeInUp">
        <h6> our services </h6>
        <h3> Our Experties Field </h3>
      </div>
    </div>
    <div class="content wow fadeInUp">
      <div class="services-slider8 pb-60">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(service, index) in services" :key="index">
            <div class="service-card style-8">
              <div class="icon">
                <img :src="service.image" alt="" />
              </div>
              <div class="info">
                <h5>{{service.title}}</h5>
                <p>{{service.text}}</p>
                <a href="#"> Read More </a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="container">
        <div class="btm-info pt-20 border-1 border-top brd-gray wow fadeInDown">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h5> See Plan Details And Pricing For More Informations </h5>
            </div>
            <div class="col-lg-6 text-lg-end">
              <a href="#" class="pe-4 me-4 border-1 border-end brd-gray"> <i class="fas fa-server color-main me-1"></i> Daily Backups </a>
              <a href="#"> <i class="fas fa-shield color-main me-1"></i> Free Migrations </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../../data/DataAnalysis/services.json';

export default {
  data() {
    return {
      services,
      swiperOptions: {
        spaceBetween: 50,
        speed: 10000,
        autoplay: {
          delay: 1
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
            slidesPerView: 1
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
