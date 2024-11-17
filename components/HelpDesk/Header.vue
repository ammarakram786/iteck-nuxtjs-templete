<template>
  <header class="style-11">
    <div class="navs-container">
      <TopNav />
      <Navbar />
    </div>
    <div class="container">
      <div class="content section-padding">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="info">
              <h6> // Build better bonds automatically </h6>
              <h1> A Simple Ticketing System For a Team Like Yours </h1>
              <p class="color-999 me-5 d-inline-block"> <i class="fal fa-check me-2"></i> Ready-to-use automations </p>
              <p class="color-999 d-inline-block"> <i class="fal fa-check me-2"></i> Free 14-day trial </p>
              <div class="btns mt-50">
                <a href="#0" class="btn rounded-pill bg-green fw-bold text-white" target="_blank">
                  <small> Get Started Now </small>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img">
              <img src="/assets/img/header/header_11_img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '../Navbars/HelpDeskNav';
import TopNav from '../Navbars/HelpDeskNav/TopNav';

export default {
  components: {
    TopNav,
    Navbar
  }
}
</script>
