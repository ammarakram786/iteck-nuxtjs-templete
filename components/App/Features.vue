<template>
  <section class="features pt-70 pb-70 style-4" data-scroll-index="1">
    <div class="container">
      <div class="section-head text-center style-4">
        <small class="title_small bg-white">{{ rtl ? 'نوتيرو - تطبيق مذكرة سهل الاستخدام' : 'Notero - Easy Notes App' }}</small>
        <h2 class="mb-70">{{ rtl ? 'خدمات' : 'Awesome' }} <span> {{ rtl ? 'رائعة' : 'Features' }} </span> </h2>
      </div>
      <div class="content">
        <div class="features-card" v-for="(feature, index) in featuresData" :key="index">
          <div class="icon img-contain">
            <img :src="feature.image" alt="" />
            <span class="label icon-40 alert-success text-success rounded-circle small text-uppercase fw-bold" v-if="feature.new">{{ rtl ? 'جديد' : 'new' }}</span>
          </div>
          <h6>{{ feature.title.text1 }} <br /> {{ feature.title.text2 }}</h6>
        </div>
      </div>
    </div>
    <img src="/assets/img/feat_circle.png" alt="" class="img-circle" />
  </section>
</template>

<script>
import features from '../../data/App/features.json';
import featuresRTL from '../../data/App/features-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    featuresData() {
      return this.rtl ? featuresRTL : features
    }
  }
}
</script>
