<template>
  <footer class="style-5 border-top brd-gray">
    <div class="container">
      <div class="row gx-0 justify-content-between">
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">
              Iteck - 1st eCommerce Dashboard
            </div>
            <small class="text">
              Over 25 years working in IT services developing software applications and mobile apps for
              clients all over the world. For your very specific industry, <br /> we have highly-tailored IT
              solutions.
            </small>
            <div class="socail-icons">
              <a href="https://twitter.com/" rel="noreferrer" class="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com/" rel="noreferrer" class="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/" rel="noreferrer" class="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">
              Information
            </div>
            <small class="text mb-10 d-block">
              {{ footerData.address.address1 }} <br /> {{ footerData.address.address2 }}
            </small>
            <small class="text mb-10 d-block">
              {{ footerData.phone }}
            </small>
            <small class="text d-block">
              {{ footerData.email }}
            </small>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="items">
            <div class="title">
              Useful Links
            </div>
            <ul>
              <li v-for="(link, index) in footerData.usefulLinks" :key="index">
                <a :href="link.link">{{link.title}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="items">
            <div class="title">
              Resource
            </div>
            <ul>
              <li v-for="(link, index) in footerData.resources" :key="index">
                <a :href="link.link">{{link.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="logo">
              <img src="/assets/img/logo_foot_home5.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <small class="small">
              © 2022 Copyrights by <a href="#" class="fw-bold text-decoration-underline">Iteck Co.</a> All Rights Reserved. Designed by <a href="https://themeforest.net/user/themescamp" class="fw-bold text-decoration-underline">ThemesCamp</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import footerData from '../../data/Saas/footer.json';

export default {
  data() {
    return {
      footerData
    }
  },
}
</script>
