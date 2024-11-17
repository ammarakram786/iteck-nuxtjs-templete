<template>
  <section class="feat-dark" data-overlay-dark="0">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="(feature, i) in features" :key="i">
          <div class="item d-flex text-white">
            <div class="icon">
              <span class="d-flex align-items-center justify-content-center">
                <i :class="feature.icon"></i>
              </span>
            </div>
            <div class="cont">
              <h6>{{ feature.title }}</h6>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pattern bg-img"></div>
  </section>
</template>

<script>
import features from '../../data/Preview/features.json'

export default {
  data() {
    return {
      features
    }
  },
}
</script>
