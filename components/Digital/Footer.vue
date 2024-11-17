<template>
  <footer class="style-1">
    <div class="container">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-4">
            <div class="foot_info">
              <a href="#" class="logo mb-3">
                <img src="/assets/img/logo_cl.png" alt="" />
              </a>
              <div class="text mb-4">
                Best IT Solutions & Technology WordPress <br /> Theme for Your Busines
              </div>
              <ul class="mb-4">
                <li class="d-flex">
                  <i class="bi bi-house me-3"></i>
                  <a href="#">
                    <span>{{ footerInfo.address }}</span>
                  </a>
                </li>
                <li class="d-flex">
                  <i class="bi bi-envelope me-3"></i>
                  <a href="#">
                    <span>{{ footerInfo.email }}</span>
                  </a>
                </li>
                <li class="d-flex">
                  <i class="bi bi-phone me-3"></i>
                  <a href="#">
                    <span>{{ footerInfo.phone }}</span>
                  </a>
                </li>
              </ul>
              <div class="social_icons">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="links">
              <div class="cont">
                <h6 class="link_title">
                  Services
                </h6>
                <ul>
                  <li v-for="(item, index) in footerInfo.services" :key="index">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="links">
              <div class="cont">
                <h6 class="link_title">
                  Information
                </h6>
                <ul>
                  <li v-for="(item, index) in footerInfo.information" :key="index">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="foot_subscribe">
              <h6 class="link_title">
                Newsletter
              </h6>
              <p>
                Register now to get latest updates on  promotions & coupons.
              </p>
              <div class="input-group my-4">
                <input type="text" class="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2" />
                <button class="btn butn-gard border-0 text-white px-3" type="button" id="button-addon2">
                  <span>Subscribe</span>
                </button>
              </div>
              <p class="fst-italic">By subscribing, you accepted the our <a href="#" class="text-decoration-underline"> Policy</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="foot">
            <p>
              © 2022 Copyrights by <a href="#" class="text-white text-decoration-underline">Iteck Co.</a> All Rights Reserved by <a href="#" class="text-white text-decoration-underline"> ThemesCamp </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/footer/foot_l.png" alt="" class="foot_l" />
    <img src="/assets/img/footer/foot_r.png" alt="" class="foot_r" />
  </footer>
</template>

<script>
import footerInfo from '../../data/Digital/footer.json';

export default {
  data() {
    return {
      footerInfo
    }
  },
}
</script>
