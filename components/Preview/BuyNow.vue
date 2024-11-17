<template>
  <section class="box-gr">
    <div class="container-xxl box">
      <div class="row">
        <div class="col-lg-5 valign">
          <div class="cont mb-5 mb-lg-0">
            <h2 class="mb-20 text-capitalize">Buy now and get a new Updates frequently</h2>
            <p class="color-777 lh-6 fs-14px">By getting Iteck today, you receive free lifetime updates! Lots of interesting features are on the way!</p>
            <a :href="appData.itemStoreLink" class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
              <small class="text-uppercase">Purchase Now</small>
            </a>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div class="img">
            <img src="/landing-preview/img/b1.png" alt="" />
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
