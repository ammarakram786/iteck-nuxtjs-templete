<template>
  <section class="features style-15">
    <div class="container">
      <div class="section-head text-center mb-50 wow fadeInUp">
        <h6 class="text-uppercase fw-bold lh-8">
          <img src="/assets/img/icons/home_15_icon.png" alt="" class="icon-30 me-2" />
          <span> core features </span>
          <img src="/assets/img/icons/home_15_icon.png" alt="" class="icon-30 ms-2" />
        </h6>
        <h2 class="fs-1"> Features & Reveals </h2>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-4" v-for="(feature, index) in features" :key="index">
            <a href="#" class="features-card wow fadeInUp">
              <div class="icon">
                <img :src="feature.icon" alt="" />
              </div>
              <h6> {{ feature.title }} </h6>
              <p> {{ feature.details }} </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import features from '../../data/Crypto/features.json';

export default {
  data() {
    return {
      features
    }
  },
}
</script>
