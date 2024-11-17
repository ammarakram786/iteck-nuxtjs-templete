<template>
  <section class="timeline style-15">
    <div class="container">
      <div class="section-head mb-70 wow fadeInUp">
        <h6 class="text-uppercase fw-bold lh-8">
          <img src="/assets/img/icons/home_15_icon.png" alt="" class="icon-30 me-2" />
          <span> timeline </span>
        </h6>
        <h2 class="fs-1"> The Timeline Of Our Journey </h2>
      </div>
      <div class="content">
        <div class="timeline-cards">
          <div class="row">
            <div class="col-lg-3 col-sm-6" v-for="(item, idx) in timelineData" :key="idx">
              <div class="timeline-card wow fadeInUp">
                <div class="icon">
                  <img :src="item.image" alt="" />
                </div>
                <div class="info">
                  <h6> {{ item.title.partOne }} <br /> {{ item.title.partTwo }} </h6>
                </div>
                <span class="year"> {{ item.year }} </span>
              </div>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar wow" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import timelineData from '../../data/Crypto/timeline.json';

export default {
  data() {
    return {
      timelineData
    }
  },
}
</script>
