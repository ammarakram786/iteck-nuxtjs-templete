<template>
  <footer class="style-7">
    <div class="container">
      <div class="content section-padding">
        <div class="row">
          <div class="col-lg-4 border-1 border-end brd-gray">
            <div class="info-logo">
              <a href="#" class="logo">
                <img src="/assets/img/logo_lgr.png" alt="" />
              </a>
              <div class="text">
                {{ footerData.text }}
              </div>
              <div class="social-links">
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
          <div class="col-lg-8">
            <div class="links-side">
              <div class="row gx-5">
                <div class="col-lg-6">
                  <div class="links-group">
                    <h5>What We Do</h5>
                    <div class="row">
                      <div class="col-lg-6">
                        <ul class="links">
                          <li v-for="(link, index) in footerData.links" :key="index">
                            <a :href="link.href"> {{ link.text }} </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-6">
                        <ul class="links">
                          <li v-for="(link, index) in footerData.links2" :key="index">
                            <a :href="link.href"> {{ link.text }} </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="links-group">
                    <h5>More Pages</h5>
                    <div class="row">
                      <div class="col-lg-6">
                        <ul class="links">
                          <li v-for="(link, index) in footerData.morePages" :key="index">
                            <a :href="link.href"> {{ link.text }} </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-6">
                        <ul class="links">
                          <li v-for="(link, index) in footerData.morePages2" :key="index">
                            <a :href="link.href"> {{ link.text }} <small v-if="link.label" class="text-uppercase bg-blue7 text-white py-1 px-3 rounded-pill ms-2 lh-2"> {{ link.label }} </small></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="foot bg-white p-3 rounded-pill text-center">
        <p> Full Copyright & Design By <a href="#" class="fw-bold"> @ThemesCamp </a> - 2022 </p>
      </div>
    </div>
  </footer>
</template>

<script>
import footerData from '../../data/ITCreative/footer.json';

export default {
  data() {
    return {
      footerData
    }
  },
}
</script>
