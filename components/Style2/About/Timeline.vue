<template>
  <section class="timeline section-padding bg-gray5">
    <div class="container">
      <div class="section-head text-center mb-70 style-5">
        <h2 class="mb-20"> Journey Was <span> Started </span> </h2>
        <p>More than 15,000 companies trust and choose Itech</p>
      </div>
      <div class="timeline-content">
        <div class="timeline-card" v-for="(item, index) in timelineItems" :key="index">
          <div class="row justify-content-around align-items-center">
            <div class="col-lg-4" v-if="index % 2 === 0">
              <div class="card-year text-lg-end wow left_to_right_apperance ">
                <h3> {{ item.year }} </h3>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card-info wow left_to_right_apperance ">
                <h6> {{ item.title }} </h6>
                <p> {{ item.text }} </p>
                <span class="num"> {{ item.num }} </span>
              </div>
            </div>
            <div class="col-lg-4" v-if="index % 2 !== 0">
              <div class="card-year wow left_to_right_apperance ">
                <h3> {{ item.year }} </h3>
              </div>
            </div>
          </div>
          <div class="line wow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import timelineItems from '../../../data/Style2/timeline.json';

export default {
  data() {
    return {
      timelineItems
    }
  },
}
</script>
