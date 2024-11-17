<template>
  <section class="numbers section-padding style-6">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-lg-4" v-for="(number, index) in Numbers" :key="index">
            <div class="number-card style-6">
              <h2 class="me-4">
                <countTo class="counter" :startVal="0" :endVal="number.value" :duration="1500" ref="counter" /> 
                <template v-if="number.operator"> +</template>
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
import numbers from '../../data/Startup/numbers.json';
import numbersRTL from '../../data/Startup/numbers-rtl.json';

export default {
  props: ['rtl'],
  components: {
    countTo
  },
  computed: {
    Numbers() {
      return this.rtl ? numbersRTL : numbers;
    }
  },
  data() {
    return {
      position: { from: 4300, to: 4650 },
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
