<template>
  <header class="style-6">
    <div class="content" data-scroll-index="0">
      <OnePageNavbar :rtl="rtl" v-if="isOnePage" />
      <div v-else>
        <NavbarRTL v-if="rtl" />
        <Navbar v-else />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="info">
              <h6>{{ rtl ? 'Itekseo للتسويق الألكترونى' : 'itekseo agency' }}</h6>
              <h1>
                <template v-if="rtl">
                  التسويق الالكترونى هو <span> <small> المستقبل </small> </span>
                </template>
                <template v-else>
                  SEO Analytics and Marketing for <span><small>Startup</small></span>
                </template>
              </h1>
              <div class="text">
                <template v-if="rtl">
                    ضمان أفضل عائد على الاستثمار لمتطلبات حملة تحسين محركات البحث (SEO) الخاصة بك. <br />
                  احصل على تحليل SEO المجاني الخاص بك
                </template>
                <template v-else>
                  Ensuring the best return on investment for your bespoke SEO campaign requirement. <br /> Get your free SEO Analysis
                </template>
              </div>
              <form action="contact.php" class="form" method="post">
                <div class="form-group">
                  <i class="fas fa-globe me-2"></i>
                  <input type="text" name="website" :placeholder='rtl ? "رابط موقعك الالكترونى" : "https://yoursite.com"' />
                </div>
                <div class="form-group">
                  <i class="far fa-envelope me-2"></i>
                  <input type="text" name="email" :placeholder='rtl ? "البريد الالكترونى" : "youremail@domain.com"' />
                </div>
                <a href="#" class="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold">
                  <span>
                    {{ rtl ? "أبدأ الأن" : "Analyze Now" }} <i class="bi bi-arrow-right ms-1"></i>
                  </span>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/header/hand_megaphone.png" alt="" class="hand-mega slide_up_down" />
    <img src="/assets/img/header/target_3d.png" alt="" class="target-3d rotate-center" />
    <img src="/assets/img/header/head6_rating.png" alt="" class="head6-rating scale_up_down" />
    <img src="/assets/img/header/header5_linechart.png" alt="" class="head6-charts scale_up_down" />
    <img src="/assets/img/header/rocket.png" alt="" class="head6-rocket" />
  </header>
</template>

<script>
import Navbar from '../Navbars/StartupNav';
import OnePageNavbar from '../Navbars/StartupNav/OnePageNav';
import NavbarRTL from '../Navbars/StartupNav/RTLNav';

export default {
  props: ['rtl', 'isOnePage'],
  components: {
    Navbar,
    OnePageNavbar,
    NavbarRTL
  }
}
</script>
