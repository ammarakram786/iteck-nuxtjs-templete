<template>
  <section class="careers-positions pb-100">
    <div class="container">
      <div class="section-head text-center mb-60 style-5">
        <h2 class="mb-20"> Opening <span> Positions </span> </h2>
        <div class="text color-666">More than 15,000 companies trust and choose Itech</div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="(position, index) in positions" :key="index">
          <a href="#" :class="`position-card ${index !== positions.length - 1 ? 'mb-4':''} ${index === positions.length - 2 ? 'mb-lg-0':''}`">
            <h5>{{ position.title }}</h5>
            <p>{{ position.description }}</p>
            <div class="time">
              <span class="me-4"> <i class="fal fa-clock me-1 color-main"></i> Full-time </span>
              <span> <i class="fal fa-dollar-sign me-1 color-main"></i> {{ position.salary }} </span>
            </div>
            <span class="trend-mark" v-if="position.trend"> <i class="fas fa-bolt"></i> </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import positions from '../../../data/Style2/positions.json';

export default {
  data() {
    return {
      positions
    }
  },
}
</script>
