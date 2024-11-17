<template>
  <section class="careers-positions">
    <div class="container">
      <div class="content section-padding border-1 border-top brd-gray">
        <div class="section-head mb-60 style-5">
          <h2 class="mb-20"> Opening <span> Positions </span> </h2>
          <div class="text color-666">More than 15,000 companies trust and choose Itech</div>
        </div>
        <div class="careers-positions-slider5">
          <swiper class="swiper-container" :options="swiperOptions">
            <swiper-slide v-for="(position, index) in positions" :key="index">
              <a href="#" class="position-card mb-4">
                <h5>{{position.title}}</h5>
                <p> {{ position.description }} </p>
                <div class="time">
                  <span class="me-4"> <i class="fal fa-clock me-1 color-main"></i> {{ position.type }} </span>
                  <span> <i class="fal fa-dollar-sign me-1 color-main"></i> {{ position.salary }} </span>
                </div>
                <span class="trend-mark" v-if="position.trend"><i class="fas fa-bolt"></i></span>
              </a>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import positions from '../../../data/Style2/career-positions.json';

export default {
  data() {
    return {
      positions,
      swiperOptions: {
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
          delay: 5000
        },
        loop: true,
        pagination: false,
        navigation: {
          nextEl: '.careers-positions-slider5 .swiper-button-next',
          prevEl: '.careers-positions-slider5 .swiper-button-prev'
        },
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
            slidesPerView: 3
          }
        }
      }
    }
  },
}
</script>
