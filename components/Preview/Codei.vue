<template>
  <section class="codei section-padding">
    <div class="container-xxl box px-4">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="cont mb-5 mb-lg-0">
            <h2 class="mb-20 lh-3 fs-2 text-capitalize">Build and customize stunning pages in minutes – easily.</h2>
            <p class="color-777 lh-6 fs-14px">huge collection of elements, rich customizability, flexible layouts, and fast results!</p>
            <p class="color-777 lh-6 fs-14px">Choose a pre-built headers or create a custom layout that perfectly suits your needs. It’s easy, fast and mobile-friendly.</p>
            <a :href="appData.itemStoreLink" class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
              <small class="text-uppercase">Purchase Now</small>
            </a>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div class="img">
            <img src="/landing-preview/img/b3.png" alt="" />
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
