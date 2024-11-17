<template>
  <section class="cal-actn section-padding text-white" data-overlay-dark="0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="cont text-center">
            <h3 class="num"><span class="gr">4567<span class="thin">+</span></span></h3>
            <h6 class="sub-title inline gr-sunrise-text my-3 text-uppercase">Licenses sold and counting</h6>
            <h2>Let’s Start Your Business Today!</h2>
            <p class="mt-15">Create innovative website today. Purchase Iteck Template now!</p>
            <a :href="appData.itemStoreLink" class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
              <small class="text-uppercase"> Purchase Now </small>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="circle-img">
      <img src="/landing-preview/img/circle.png" alt="" />
    </div>
  </section>
</template>

<script>
import appData from '../../data/appData.json';

export default {
  data() {
    return {
      appData
    }
  },
}
</script>
