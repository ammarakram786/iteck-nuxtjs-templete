<template>
  <section class="features style-10">
    <div class="content">
      <div class="row gx-0">
        <div class="col-lg-3 col-sm-6" v-for="(feature, idx) in features" :key="idx">
          <div class="feat-card">
            <div class="icon">
              <img :src="feature.image" alt="" />
            </div>
            <div class="info">
              <a href="#"> {{ feature.sub_title }} </a>
              <h4> {{ feature.title }} </h4>
              <p> {{ feature.details }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import features from '../../data/CyberSecurity/features.json';

export default {
  data() {
    return {
      features
    }
  },
}
</script>
