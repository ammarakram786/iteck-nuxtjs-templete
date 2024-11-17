<template>
  <section class="best-feat section-padding" data-overlay-dark="0">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-50" v-for="(item, i) in features" :key="i">
          <div class="item">
            <span class="icon">
              <i :class="item.icon"></i>
            </span>
            <h6>{{ item.title }}</h6>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import features from '../../data/Preview/best-features.json';

export default {
  data() {
    return {
      features
    }
  },
}
</script>