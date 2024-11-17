<template>
  <section class="about style-1" data-scroll-index="1">
    <div class="container">
      <div class="content">
        <div class="about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20">
          <a href="#" class="logo wow fadeInUp" :data-wow-delay="index * 0.2 + 's'" v-for="(logo, index) in aboutData.logos" :key="index">
            <img :src="logo" alt="" />
          </a>
        </div>
        <div class="about-info">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="title">
                <h3 class=" wow fadeInUp slow">“Technology is best when it brings people  together.”</h3>
                <small class="wow fadeInUp slow fw-bold">Patricia Cross</small>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info">
                <h6 class=" wow fadeInUp slow">
                  We can help to maintain and modernize your IT infrastructure  & solve various infrastructure-specific issues a business may face.
                </h6>
                <p class=" wow fadeInUp slow">
                  Iteck Co is the partner of choice for many of the world’s leading  enterprises, SMEs and technology challengers. We help businesses  elevate their value through custom software development, product  design, QA and consultancy services.
                </p>
                <NuxtLink to="/page-about-5" class="btn btn-outline-light mt-5 sm-butn wow fadeInUp slow">
                  <span>more about us</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="about-numbers" ref={numbersSectionRef}>
          <div class="row">
            <div class="col-lg-3 col-sm-6" v-for="(item, index) in aboutData.numbers" :key="index">
              <div class="num-item wow fadeInUp" data-wow-delay="0">
                <div class="num">
                  <countTo class="counter" :startVal="0" :endVal="item.number" :duration="1500" ref="counter" />
                  <span v-if="item.operator">
                    <template v-if="typeof item.operator === 'string'">{{ item.operator }}</template>
                    <i v-else class="fas fa-plus"></i>
                  </span>
                </div>
                <div class="inf">
                  {{ item.info }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/about/num_shap.png" alt="" class="about_shap" />
      </div>
    </div>
  </section>
</template>

<script>
import countTo from 'vue-count-to';
import aboutData from '../../data/Digital/about.json';

export default {
  data() {
    return {
      aboutData,
      position: { from: 300, to: 550 },
      restart: true
    }
  },
  components: {
    countTo
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
