<template>
  <footer class="style-6 border-top brd-gray">
    <div class="container">
      <div class="row gx-0 justify-content-between">
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">
              {{ rtl ? "Itekseo - الأفضل في التسويق" : "Itekseo - Best for SEO/Marketing" }}
            </div>
            <ul>
              <li class="color-666 mb-2">
                <i class="bi bi-house me-1"></i>
                <small>{{ FooterData.address }}</small>
              </li>
              <li class="color-666 mb-2">
                <i class="bi bi-phone me-1"></i>
                <small>{{ FooterData.phone }}</small>
              </li>
              <li class="color-666 mb-2">
                <i class="bi bi-envelope me-1"></i>
                <small>{{ FooterData.email }}</small>
              </li>
            </ul>
            <div class="socail-icons">
              <a href="twiter.com" class="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="facebook.com" class="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="instagram.com" class="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="items">
            <div class="title">
              {{ rtl ? "الخدمات" : "Services" }}
            </div>
            <ul>
              <li v-for="(service, index) in FooterData.services" :key="index">
                <a :href="service.link">{{ service.title }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="items">
            <div class="title">
              {{ rtl ? "المعلومات" : "Information" }}
            </div>
            <ul>
              <li v-for="(information, index) in FooterData.information" :key="index">
                <NuxtLink :to="information.link">{{ information.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">
              {{ rtl ? "النشرة الإخبارية" : "Newsletter" }}
            </div>
            <small class="color-666">{{ rtl ? "سجل الآن للحصول على آخر التحديثات على" : "Register now to get latest updates on" }} <br /> {{ rtl ? "الترقيات والقسائم." : "promotions & coupons." }}</small>
            <form action="contact.php" class="form mt-30" method="post">
              <div class="form-group">
                <span class="icon">
                  <i class="bi bi-envelope"></i>
                </span>
                <input type="text" :placeholder='rtl ? "ادخل بريدك الالكترونى" : "Enter your email"' />
                <button> <i class="bi bi-send"></i> </button>
              </div>
            </form>
            <small class="color-666 fst-italic mt-20">{{ rtl ? "من خلال الاشتراك ، فإنك توافق على" : "By subscribing, you accepted the our" }} <a href="#" class="fst-normal text-dark">{{ rtl ? "سياستنا." : "Policy." }}</a> </small>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="logo">
              <img src="/assets/img/logo_home6.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <small class="small">
              {{ rtl ? "© 2022 حقوق التأليف والنشر" : "© 2022 Copyrights by" }} <small class="fw-bold text-decoration-underline">Iteck Co.</small> {{ rtl ? "كل الحقوق محفوظة. صمم بواسطة" : "All Rights Reserved. Designed by" }} <a href="https://themeforest.net/user/themescamp" class="fw-bold text-decoration-underline">ThemesCamp</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import footerData from '../../data/Startup/footer.json';
import footerDataRTL from '../../data/Startup/footer-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    FooterData() {
      return this.rtl ? footerDataRTL : footerData;
    }
  }
}
</script>
