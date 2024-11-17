<template>
  <header class="style-9">
    <TopNav />
    <Navbar />
    <div class="navs-container">
      <div class="hosting-links py-4 text-white text-center">
        <div class="container">
          <div class="links">
            <a href="#" class="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Cloud Hosting </a>
            <a href="#" class="me-4 hover-darkBlue"> Web Hosting </a>
            <a href="#" class="me-4 hover-darkBlue"> Windows Hosting </a>
            <a href="#" class="me-4 hover-darkBlue"> Dedicated Server </a>
            <a href="#" class="me-4 hover-darkBlue"> VPS Hosting </a>
            <a href="#" class="hover-darkBlue"> Reseller Hosting </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content section-padding">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="info">
              <h6> cloud hosting </h6>
              <h1> High Performance Secured <span> Hosting </span> </h1>
              <ul>
                <li> Improved page loads and SEO </li>
                <li> Fee domain, email & support included </li>
                <li> 30-day money back guarantee </li>
              </ul>
              <a href="#" class="butn border-2 border-white border rounded-3 text-white mt-40">
                <span> Get Started Now </span>
              </a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="img">
              <img src="/assets/img/header/header9.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '../Navbars/CloudNav';
import TopNav from '../Navbars/CloudNav/TopNav';

export default {
  components: {
    Navbar,
    TopNav
  }
}
</script>
