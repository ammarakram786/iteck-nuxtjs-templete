<template>
  <footer class="style-8 bg-gray2">
    <div class="container">
      <div class="content section-padding">
        <div class="logo-social">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="foot-logo">
                <a href="#">
                  <img src="/assets/img/logo_home8.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-6 text-lg-end">
              <div class="socials">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="links-content">
          <div class="row justify-content-between">
            <div class="col-lg-4">
              <div class="foot-info">
                <h6 class="foot-title"> About Us </h6>
                <p>{{footerData.text}}</p>
                <ul class="mt-20">
                  <li>
                    <a href="#"> <i class="fas fa-envelope-open me-2 color-main"></i> {{footerData.email}}</a>
                  </li>
                  <li>
                    <a href="#"> <i class="fas fa-phone me-2 color-main"></i> {{footerData.phone}}</a>
                  </li>
                  <li>
                    <a href="#"> <i class="fas fa-map-marker-alt me-2 color-main"></i> {{footerData.address}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="links">
                <h6 class="foot-title"> What We Do </h6>
                <ul>
                  <li v-for="(link, index) in footerData.links" :key="index">
                    <a :href="link.href"> {{ link.text }} </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="links">
                <h6 class="foot-title"> Other Pages </h6>
                <ul>
                  <li v-for="(link, index) in footerData.morePages" :key="index">
                    <a :href="link.href"> {{ link.text }} </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="foot-subscribe">
                <h6 class="foot-title"> Get Newsletter </h6>
                <p> Get every single promotional & business update. </p>
                <div class="form-group mt-30">
                  <span class="icon"> <i class="fas fa-envelope-open"></i> </span>
                  <input type="text" class="form-control" placeholder="Email address" />
                </div>
                <a href="#" class="butn bg-main border-0 rounded-pill hover-shadow flex-shrink-0 mt-20 w-100 py-3" type="submit">
                  <span class="text-white"> Subscribe Now <i class="fal fa-long-arrow-right ms-2"></i> </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="foot py-4 border-1 border-top brd-gray text-center">
        <p> Full Copyright & Design By <a href="#" class="fw-bold"> @ThemesCamp </a> - 2022 </p>
      </div>
    </div>
  </footer>
</template>

<script>
import footerData from '../../data/DataAnalysis/footer.json';

export default {
  data() {
    return {
      footerData
    }
  },
}
</script>
