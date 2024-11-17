<template>
  <section class="numbers style-8 pt-100">
    <div class="container">
      <div class="section-head style-8 text-center mb-80 wow fadeInUp">
        <h6> support platform </h6>
        <h3> Intregrations Platforms </h3>
      </div>
      <div class="content">
        <div class="logo-icon wow zoomIn">
          <img src="/assets/img/logo_home8_icon.png" alt="" />
        </div>
        <div class="plat-icons">
          <a href="#" class="icon icon-shadow slide_up_down">
            <img src="/assets/img/icons/numbers/1.png" alt="" />
          </a>
          <a href="#" class="icon slide_up_down">
            <img src="/assets/img/icons/numbers/2.png" alt="" />
          </a>
          <a href="#" class="icon icon-shadow slide_up_down">
            <img src="/assets/img/icons/numbers/3.png" alt="" />
          </a>
          <a href="#" class="icon slide_up_down">
            <img src="/assets/img/icons/numbers/4.png" alt="" />
          </a>
          <a href="#" class="icon icon-shadow slide_up_down">
            <img src="/assets/img/icons/numbers/5.png" alt="" />
          </a>
          <a href="#" class="icon icon-shadow slide_up_down">
            <img src="/assets/img/icons/numbers/6.png" alt="" />
          </a>
        </div>
        <img src="/assets/img/num8_circle.png" alt="" class="num8_circle rotate-center" />
      </div>
    </div>
    <div class="numbers-btm">
      <div class="container">
        <div class="numbers-content">
          <div class="row">
            <div class="col-lg-3 col-sm-6" v-for="(number, idx) in numbers" :key="idx">
              <div class="number-card style-8 mt-4 mt-lg-0 wow fadeInUp">
                <div class="icon">
                  <img :src="number.image" alt="" />
                </div>
                <div class="inf">
                  <h3> 
                    <countTo class="counter" :startVal="0" :endVal="number.value" :duration="1500" ref="counter" /> 
                    {{ number.operator }} 
                  </h3>
                  <p>{{ number.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/icons/numbers/7.png" alt="" class="r_shape rotate-center" />
  </section>
</template>

<script>
import countTo from 'vue-count-to';
import numbers from '../../data/DataAnalysis/numbers.json';

export default {
  components: {
    countTo
  },
  data() {
    return {
      numbers,  
      position: { from: 2500, to: 2750 },
      restart: true
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
  },
}
</script>=