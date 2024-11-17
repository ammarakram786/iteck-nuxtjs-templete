<template>
  <section class="clients-imgs pt-100">
    <div class="container">
      <div class="section-head text-center mb-70 style-5">
        <h2 class="mb-20"> Trusted By Thousands <span> Business </span> </h2>
      </div>
      <div class="clients-content">
        <a href="#" class="client-logo" v-for="(client, index) in clients" :key="index">
          <img :src="client" alt="" />
        </a>
      </div>
      <h5 class="text-center mt-50"> More <span class="color-blue5"> 15,000 </span> Companies & partners trusted & choice Itekseo </h5>
    </div>
    <div class="about2-imgs-slider pt-100">
      <swiper class="swiper-container" :options="swiperOptions">
        <swiper-slide>
          <a href="#" class="img img-cover">
            <img src="/assets/img/about/about2_1.png" alt="" />
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#" class="img img-cover">
            <img src="/assets/img/about/about2_2.png" alt="" />
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#" class="img img-cover">
            <img src="/assets/img/about/about2_3.png" alt="" />
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import clients from '../../../data/Style2/clients.json';

export default {
  data() {
    return {
      clients,
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
            slidesPerView: 3
          }
        }
      }
    }
  },
}
</script>