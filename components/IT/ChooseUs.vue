<template>
  <section class="choose-us style-2 border-top bg-darkBlue brd-light section-padding" data-scroll-index="4">
    <div class="container">
      <div class="section-head mb-30 text-center">
        <h2 class="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">why choose us</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="img pe-lg-5">
            <img src="/assets/img/choose_us/circles.png" alt="" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="info">
            <p class="text-white text-uppercase mb-60">We create differentiated value to rise to the <br /> top in this field</p>
            <ul>
              <li :class="`d-flex ${index !== chooseUsData.length - 1 ? 'mb-30':''}`" v-for="(item, index) in chooseUsData" :key="index">
                <div class="icon me-4 flex-shrink-0">
                  <img :src="item.image" alt="" />
                </div>
                <div class="inf">
                  <h5 class="text-white text-capitalize mb-2">{{ item.title }}</h5>
                  <small class="text-white op-8">
                    <template v-if="typeof item.desc === 'string'">{{ item.desc }}</template>
                    <span v-else>{{ item.desc.desc1 }} <br /> {{ item.desc.desc2 }}</span>
                  </small>
                </div>
              </li>
            </ul>
            <NuxtLink to="/page-contact-5" class="btn sm-butn border text-white radius-9 mt-70 hover-darkBlue">
              <span>Request A Consultation</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <Numbers />
    </div>
  </section>
</template>

<script>
import Numbers from './Numbers';
import chooseUsData from '../../data/IT/chooseus.json';

export default {
  data() {
    return {
      chooseUsData
    }
  },
  components: {
    Numbers
  }
}
</script>
