<template>
  <footer class="style-9">
    <div class="container">
      <div class="content">
        <div class="row gx-0 justify-content-between">
          <div class="col-lg-3 col-sm-6">
            <h5 class="foot-title"> About Iteck </h5>
            <div class="links">
              <ul class="d-flex flex-wrap">
                <li class="w-50" v-for="(link, index) in footerLinks.links" :key="index">
                  <a :href="link.href"> {{ link.text }} <small v-if="link.badge" class="text-uppercase bg-blue7 text-white py-1 px-3 rounded-pill ms-1 lh-1"> {{ link.badge }} </small> </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2">
            <h5 class="foot-title"> Resources </h5>
            <div class="links">
              <ul class="">
                <li v-for="(link, index) in footerLinks.resources" :key="index">
                  <a :href="link.href"> {{ link.text }} </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2">
            <h5 class="foot-title"> Shopping </h5>
            <div class="links">
              <ul>
                <li v-for="(link, index) in footerLinks.shopping" :key="index">
                  <a :href="link.href"> {{ link.text }} </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <h5 class="foot-title"> Partner Programs </h5>
            <div class="links">
              <ul>
                <li v-for="(link, index) in footerLinks.programs" :key="index">
                  <a :href="link.href"> {{ link.text }} </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="row align-items-center">
          <div class="col-lg-2 border-1 border-end brd-light">
            <a class="navbar-brand pe-4" href="#">
              <img src="/assets/img/logo_9.png" alt="" />
            </a>
          </div>
          <div class="col-lg-7">
            <div class="info ps-4">
              <p class="mb-1"> Copyright © 1999 - 2022 <a href="#" class="fw-bold text-white"> ThemesCamp </a>, LLC. All Rights Reserved. </p>
              <p> The ThemeCamp word mark is a registered trademark of ThemeForest Operating Company. </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 text-lg-end">
            <div class="social-icons">
              <a href="#"> <i class="fab fa-facebook-f"></i> </a>
              <a href="#"> <i class="fab fa-twitter"></i> </a>
              <a href="#"> <i class="fab fa-behance"></i> </a>
              <a href="#"> <i class="fab fa-youtube"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import footerLinks from '../../data/CloudHosting/footerLinks.json';

export default {
  data() {
    return {
      footerLinks
    }
  },
}
</script>
