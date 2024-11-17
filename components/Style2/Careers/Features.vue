<template>
  <section class="careers-features pb-70">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="(feature, index) in features" :key="index">
            <div class="careers-feat-card">
              <div class="icon">
                <img :src="feature.icon" alt="" />
              </div>
              <div class="info">
                <h4> {{ feature.title }} </h4>
                <p> {{ feature.description }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import features from '../../../data/Style2/features.json';

export default {
  data() {
    return {
      features
    }
  },
}
</script>
