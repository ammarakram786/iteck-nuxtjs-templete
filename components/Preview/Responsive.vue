<template>
  <section class="respons section-padding">
    <div class="container-xxl">
      <div class="row">
        <div class="col-lg-6">
          <div class="img md-mb50">
            <img src="/landing-preview/img/b2.png" alt="" />
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 valign">
          <div class="cont">
            <h6 class="sub-title d-inline-block text-uppercase ltspc-4 color-grd mb-20">Template Adaptability</h6>
            <h2 class="fs-1 text-capitalize">Fully responsive & <br /> retina-ready</h2>
            <p class="fs-6 mt-10 color-777">Be sure that your brand new website looks great on any possible screen resolution and device.</p>
            <a :href="appData.itemStoreLink" class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
              <small class="text-uppercase">Purchase Now</small>
            </a>
          </div>
        </div>
      </div>
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
