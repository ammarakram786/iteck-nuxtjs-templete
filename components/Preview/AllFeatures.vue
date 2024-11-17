<template>
  <section class="all-feat" data-overlay-dark="0">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="main-marq">
            <div class="slide-har st1">

              <div class="box">
                <div class="item d-flex align-items-center justify-content-between" v-for="(feature, i) in features" :key="i">
                  <span :class="`icon ${feature.icon}`"></span>
                  <h6>{{ feature.text }}</h6>
                </div>
              </div>

              <div class="box">
                <div class="item d-flex align-items-center justify-content-between" v-for="(feature, i) in features" :key="i">
                  <span :class="`icon ${feature.icon}`"></span>
                  <h6>{{ feature.text }}</h6>
                </div>
              </div>

            </div>
            <div class="slide-har st2">

              <div class="box">
                <div class="item d-flex align-items-center justify-content-between" v-for="(feature, i) in features" :key="i">
                  <span :class="`icon ${feature.icon}`"></span>
                  <h6>{{ feature.text }}</h6>
                </div>
              </div>

              <div class="box">
                <div class="item d-flex align-items-center justify-content-between" v-for="(feature, i) in features" :key="i">
                  <span :class="`icon ${feature.icon}`"></span>
                  <h6>{{ feature.text }}</h6>
                </div>
              </div>

            </div>
            <div class="slide-har st1">

              <div class="box">
                <div class="item d-flex align-items-center justify-content-between" v-for="(feature, i) in features" :key="i">
                  <span :class="`icon ${feature.icon}`"></span>
                  <h6>{{ feature.text }}</h6>
                </div>
              </div>

              <div class="box">
                <div class="item d-flex align-items-center justify-content-between" v-for="(feature, i) in features" :key="i">
                  <span :class="`icon ${feature.icon}`"></span>
                  <h6>{{ feature.text }}</h6>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import features from '../../data/Preview/all-features.json';

export default {
  data() {
    return {
      features
    }
  },
}
</script>
