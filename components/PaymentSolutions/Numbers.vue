<template>
  <section class="numbers style-14">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6" v-for="(number, i) in numbers" :key="i">
          <div :class="`number-item ${i !== numbers.length - 1 ? 'mb-5 mb-lg-0' : ''}`">
            <div class="icon">
              <img :src="number.icon" alt="" />
            </div>
            <div class="info">
              <h2> <span class="counter">{{ number.number }}</span>{{ number.operator }} </h2>
              <p> {{ number.title }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import numbers from '../../data/PaymentSolutions/numbers.json';

export default {
  data() {
    return {
      numbers
    }
  },
}
</script>
