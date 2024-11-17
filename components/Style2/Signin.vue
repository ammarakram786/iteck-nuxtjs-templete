<template>
  <section class="signin style-5">
    <div class="container">
      <div class="form-content">
        <div class="row gx-0">
          <div class="col-lg-6 order-last order-lg-first">
            <div class="info">
              <a href="#" class="logo">
                <img src="/assets/img/logo_foot_home5.png" alt="" />
              </a>
              <h3 class="mb-2"> Signup or Login To <span class="color-blue5"> Iteck </span> </h3>
              <p class="color-666"> Get started to login with other platform </p>
              <div class="sign-btns mt-30">
                <a href="#" class="butn py-3 px-4 border-1 rounded-3 brd-gray border me-2">
                  <span> <i class="fab fa-google me-1 color-blue5"></i> Sign in with Google </span>
                </a>
                <a href="#" class="butn py-3 px-4 border-1 rounded-3 brd-gray border ms-1 mt-3 mt-lg-0">
                  <span> <i class="fab fa-apple me-1 color-blue5"></i> Sign in with Apple </span>
                </a>
              </div>
              <div class="or-line">
                <span> or </span>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group group-icon">
                    <input type="text" class="form-control" placeholder="Email address" />
                    <span class="icon"> <i class="fas fa-envelope"></i> </span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group group-icon mt-3 mt-lg-0">
                    <input type="password" class="form-control" placeholder="Password" />
                    <span class="icon"> <i class="fas fa-key"></i> </span>
                  </div>
                </div>
              </div>
              <button class="butn bg-main border-0 rounded-3 w-100 text-white mt-20 py-3">
                <span> Sign In Now <i class="fal fa-long-arrow-right ms-2"></i> </span>
              </button>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="sign-imgs-slider">
              <swiper class="swiper-container" :options="swiperOptions">
                <swiper-slide>
                  <div class="slide-card">
                    <h3> Welcome To Iteck <br /> Community </h3>
                    <div class="img">
                      <img src="/assets/img/login/1.png" alt="" />
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="slide-card">
                    <h3> Welcome To Iteck <br /> Community </h3>
                    <div class="img">
                      <img src="/assets/img/login/2.jpg" alt="" />
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="slide-card">
                    <h3> Welcome To Iteck <br /> Community </h3>
                    <div class="img">
                      <img src="/assets/img/login/3.png" alt="" />
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
          el: ".sign-imgs-slider .swiper-pagination",
          clickable: true
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        loop: true
      }
    }
  },
}
</script>
