<template>
  <section class="process style-12">
    <div class="container">
      <div class="content section-padding border-1 border-bottom brd-light">
        <div class="section-head text-center mb-10 style-12">
          <h6 class="justify-content-center mb-3">
            <img src="/assets/img/icons/star2.png" alt="" class="icon" />
            <span class="mx-2"> process </span>
            <img src="/assets/img/icons/star2.png" alt="" class="icon" />
          </h6>
          <h2> How It <span> Works </span> </h2>
        </div>
        <div class="row gx-0">
          <div :class="`col-lg-3 col-sm-6 ${index % 2 !== 0 ? 'pt-lg-5' : ''}`" v-for="(step, index) in processSteps"
            :key="index">
            <a href="#" class="process-card">
              <div class="icon">
                <img :src="step.icon" alt="" />
              </div>
              <div class="info">
                <h6> {{ step.title }} </h6>
                <p> {{ step.details }} </p>
                <span class="step"> Step {{ step.step }} </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import processSteps from '../../data/NFTMarketplace/process.json'

export default {
  data() {
    return {
      processSteps
    }
  },
}
</script>
