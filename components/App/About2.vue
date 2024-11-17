<template>
  <section class="about section-padding style-4">
    <div class="integration">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-head text-center style-4">
            <small class="title_small">About Our Company</small>
            <h2 class="mb-20">We are the perfect <br /> Integration and IT solutions <span> Agency of Popular Apps </span> </h2>
            <p>Notero intergrate with popular apps. Help you easy to connect and collaboration</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="content mb-100 pb-100 border-1 border-bottom brd-gray">
          <div class="img" v-for="(item, index) in aboutData.integrations" :key="index">
            <img :src="item" alt="" class="mt-30" />
          </div>
        </div>
      </div>
      <img src="/assets/img/about/intg_back.png" alt="" class="intg-back" />
    </div>
    <div class="content frs-content">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6">
            <div class="img mb-30 mb-lg-0">
              <img src="/assets/img/about/ipad.png" alt="" />
            </div>
          </div>
          <div class="col-lg-5">
            <div class="info">
              <div class="section-head style-4">
                <small class="title_small">Notero - Easy Notes App</small>
                <h2 class="mb-30">The Notero For <span>Creatives</span> </h2>
              </div>
              <p class="text mb-40">
                Stay focused and productive with a clean and clutter-free note <br /> 
                space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc
              </p>
              <ul>
                <li :class="`d-flex align-items-center ${index !== aboutData.features.length - 1 ? 'mb-3':''}`" v-for="(feature, index) in aboutData.features" :key="index">
                  <small class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <i :class="feature.icon"></i>
                  </small>
                  <h6 class="fw-bold">{{ feature.title }}</h6>
                </li>
              </ul>
              <NuxtLink to="/page-contact-5" class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                <small>Free Register</small>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/about/about_s4_lines.png" alt="" class="lines" />
      <img src="/assets/img/about/about_s4_bubble.png" alt="" class="bubble" />
    </div>
  </section>
</template>

<script>
import aboutData from '../../data/App/about.json';

export default {
  data() {
    return {
      aboutData
    }
  },
}
</script>
