<template>
  <section class="features style-9">
    <div class="container">
      <div class="content section-padding border-1 border-top brd-gray">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5">
            <div class="info wow fadeInUp">
              <div class="section-head mb-40">
                <h6 class="color-green text-uppercase"> // Core Features </h6>
                <h2 class="fs-1"> Easy to customize with ai chat boot. </h2>
              </div>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item" v-for="(feature, index) in features" :key="index">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      :data-bs-target="`#flush-collapse${feature.id}`" aria-expanded="false"
                      :aria-controls="`flush-collapse${feature.id}`">
                      <span> {{ feature.id }}. </span> {{ feature.title }}
                    </button>
                  </h2>
                  <div :id="`flush-collapse${feature.id}`"
                    :class="`accordion-collapse collapse ${index === 1 ? 'show' : ''}`"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      {{ feature.details }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="img wow zoomIn" data-wow-delay="0.2s">
              <img src="/assets/img/feat_9_img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import features from '../../data/HelpDesk/features.json';

export default {
  data() {
    return {
      features
    }
  },
}
</script>
