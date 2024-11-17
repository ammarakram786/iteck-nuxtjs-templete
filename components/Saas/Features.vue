<template>
  <section :class="`features section-padding style-5 ${isServices ? 'pt-50':'bg-gray5'}`" data-scroll-index="3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-head text-center mb-60 style-5" v-if="isServices">
            <h2 class="mb-20">{{ rtl ? '' : 'Our' }} <span>{{ rtl ? 'خدماتنا' : 'Services' }}</span></h2>
            <p>
              {{ rtl ? 'نحن نقدم حلول تكنولوجيا المعلومات المثالية لعملك' : 'We provide perfect IT Solutions for your business' }}
            </p>
          </div>
          <div class="section-head text-center mb-60 style-5" v-else>
            <h2 class="mb-20">Other Awesome <span>Features</span></h2>
            <p>
              Iteck Dashboard is a powerhouse when it comes to the feature list. This ensures you have every functionality you need to build, run, and expand your marketplace
            </p>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="(feature, i) in featuresData" :key="i">
            <a href="#" class="features-card mb-30 style-5">
              <div class="icon">
                <img :src="feature.image" alt="" />
              </div>
              <div class="info">
                <h5 class="card-title">
                  {{ feature.title }}
                </h5>
                <p class="text">
                  {{ feature.descripition }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import features from '../../data/Saas/features.json';
import featuresRTL from '../../data/Saas/features-rtl.json';

export default {
  props: ['rtl', 'isServices'],
  computed: {
    featuresData() {
      return this.rtl ? featuresRTL : features;
    }
  }
}
</script>
