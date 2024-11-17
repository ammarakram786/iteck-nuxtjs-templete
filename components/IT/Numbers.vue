<template>
  <div class="choose-numbers mt-80">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row">
          <div class="col-lg-4" v-for="(number, index) in numbers" :key="index">
            <div class="num-item">
              <div class="num">
                <countTo class="counter" :startVal="0" :endVal="number.value" :duration="1500" ref="counter" />
                <span v-if="number.operator"> +</span>
              </div>
              <div class="inf">
                {{ number.title.part1 }} <br /> {{ number.title.part2 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
import numbers from '../../data/IT/numbers.json';

export default {
  data() {
    return {
      numbers,
      position: { from: 2600, to: 2900 },
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
