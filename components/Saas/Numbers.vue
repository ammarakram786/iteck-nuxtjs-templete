<template>
  <section class="numbers style-6">
    <div class="container">
      <div class="content pb-100 border-1 border-bottom brd-gray">
        <div class="row">
          <div class="col-lg-4" v-for="(number, index) in data" :key="index">
            <div class="number-card style-6">
              <h2 class="me-4 color-blue5">
                <countTo class="counter" :startVal="0" :endVal="number.value" :duration="1500" ref="counter" /> 
                <span v-if="number.operator"> +</span>
              </h2>
              <div class="text">
                {{ number.title.part1 }} <br /> {{ number.title.part2 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import countTo from 'vue-count-to';
import numbers from '../../data/Saas/numbers.json';
import numbersRTL from '../../data/Saas/numbers-rtl.json';

export default {
  props: ['rtl'],
  components: {
    countTo
  },
  computed: {
    data() {
      return this.rtl ? numbersRTL : numbers;
    }
  },
  data() {
    return {
      position: { from: 2600, to: 3340 },
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
</script>
