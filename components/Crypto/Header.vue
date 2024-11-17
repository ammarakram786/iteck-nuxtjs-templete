<template>
  <header class="style-15">
    <div class="navs-container">
      <TopNav />
      <Navbar />
    </div>
    <div class="container">
      <div class="content">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="info">
              <h6> <img src="/assets/img/icons/home_15_icon.png" alt="" class="icon-30 me-2" /> We've got your #crypto
                back </h6>
              <h1> Iteck is an innovative payment network & kind of money. </h1>
              <a href="#" class="butn bg-yellowGreen text-dark fw-bold rounded-pill">
                <span> <i class="fas fa-wallet me-2"></i> Choose Wallet </span>
              </a>
              <a href="#" class="butn border-1 border-white border rounded-pill text-white ms-3 hover-red2">
                <span> Buy Bitcoin </span>
              </a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="img mt-50">
              <img src="/assets/img/header/head_15_img.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="countdown-content wow fadeInUp">
        <div class="countdown-card">
          <div class="row align-items-center">
            <div class="col-lg-3 col-sm-6">
              <div class="inf">
                <h3> Token Sale is Live 5% Bonus Ends In: </h3>
                <a href="#" class="color-red2 text-uppercase mt-15"> register & Buy Now <i
                    class="fal fa-long-arrow-right ms-2"></i> </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="countdown px-3">
                <div class="item">
                  <h2 id="days"></h2>
                  <small> days </small>
                </div>
                <div class="item">
                  <h2 id="hours"></h2>
                  <small> Hours </small>
                </div>
                <div class="item">
                  <h2 id="minutes"></h2>
                  <small> Minute </small>
                </div>
                <div class="item">
                  <h2 id="seconds"></h2>
                  <small> Seconds </small>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="progs-content ps-4">
                <p class="text-end mb-15"> Hard Cap </p>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <div class="color-yellowGreen d-flex justify-content-between mt-20">
                  <div class="l-side"> <span class="text-white-50"> Raisen: </span> <span class="counter"> <small> $
                      </small> 65,556.80 </span> </div>
                  <div class="r-side"> <span class="counter"> <small> $ </small> 1,000,000 </span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="logos">
          <span class="text-white-50 fw-bold"> We accept: </span>
          <img src="/assets/img/logos/50.png" alt="" />
          <img src="/assets/img/logos/51.png" alt="" />
          <img src="/assets/img/logos/52.png" alt="" />
          <img src="/assets/img/logos/53.png" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TopNav from '../../components/Navbars/TopNav-15';
import Navbar from '../../components/Navbars/CryptoNav';
import timer from '../../common/timer';

export default {
  components: {
    TopNav,
    Navbar
  },
  mounted() {
    setTimeout(() => {
      timer('nov 29, 2022 11:30');
    }, 0);
  },
}
</script>
