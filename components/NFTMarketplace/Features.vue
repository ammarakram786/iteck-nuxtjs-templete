<template>
  <section class="features pt-100 style-12">
    <div class="container">
      <div class="section-head text-center mb-40 style-12">
        <h6 class="justify-content-center mb-3">
          <img src="/assets/img/icons/star2.png" alt="" class="icon" />
          <span class="mx-2"> featured </span>
          <img src="/assets/img/icons/star2.png" alt="" class="icon" />
        </h6>
        <h2> Best <span> Sellers </span> </h2>
      </div>
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-sm-6" v-for="(feature, index) in features" :key="index">
            <a href="#" class="feature-card">
              <div class="img icon-65 rounded-circle overflow-hidden img-cover me-3">
                <img :src="feature.image" alt="" />
              </div>
              <div class="info">
                <h5> {{ feature.name }} </h5>
                <p>
                  Rise:
                  <span class="color-yellowGreen ms-1"> $ </span>
                  <countTo class="counter color-yellowGreen" :startVal="0" :endVal="feature.rise" :duration="1500"
                    ref="counter" />
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="features-line-slider12">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <a href="#"> <img src="/assets/img/icons/star3.png" alt="" />
            <h2> Sell your nft </h2>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#"> <img src="/assets/img/icons/star3.png" alt="" />
            <h2> be an portfolio author </h2>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#"> <img src="/assets/img/icons/star3.png" alt="" />
            <h2> nft’s great </h2>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#"> <img src="/assets/img/icons/star3.png" alt="" />
            <h2> Sell your nft </h2>
          </a>
        </swiper-slide>
      </swiper>
      <img src="/assets/img/icons/features/27.png" alt="" class="icon slide_up_down" />
    </div>
  </section>
</template>

<script>
import countTo from 'vue-count-to';
import features from '../../data/NFTMarketplace/features.json';

export default {
  components: {
    countTo
  },
  data() {
    return {
      position: { from: 2150, to: 2500 },
      restart: true,
      features,
      swiperOptions: {
        spaceBetween: 0,
        centeredSlides: true,
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
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 2
          }
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (!this.position) return;

      const { from, to } = this.position;

      if (window.scrollY > from && window.scrollY < to && this.restart) {
        this.$refs.counter.forEach(counter => counter.start());
        this.restart = false;
      }

      if (window.scrollY < from && !this.restart) {
        this.restart = true;
      }
    });
  }
}
</script>
