<template>
  <footer :class="`style-4 ${noWave ? 'mt-0 pt-100':''}`" data-scroll-index="8">
    <div class="container">
      <div class="section-head text-center style-4">
        <h2 class="mb-10">{{ rtl ? 'جاهز' : 'Ready To' }} <span>{{ rtl ? 'للتنزيل' : 'Download' }}</span> </h2>
        <p>{{ rtl ? 'اكتشف مساحاتك المفضلة الجديدة ، من ساو باولو إلى سيول. قم بالتنزيل من App Store أو Google Play.' : 'Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.' }}</p>
        <div class="d-flex align-items-center justify-content-center mt-50">
          <a href="https://www.apple.com/app-store" rel="noreferrer" class="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
            <small> <i class="fab fa-apple me-2 pe-2 border-end"></i> {{ rtl ? 'تنزيل من متجر التطبيقات' : 'Download On App Store' }}</small>
          </a>
          <a href="https://play.google.com/store/apps" rel="noreferrer" class="btn rounded-pill hover-blue4 fw-bold border-blue4" target="_blank">
            <small> <i class="fab fa-google-play me-2 pe-2 border-end"></i> {{ rtl ? 'تنزيل من متجر ابل' : 'Download On Google Play' }}</small>
          </a>
        </div>
      </div>
      <div class="foot mt-80">
        <div class="row align-items-center">
          <div class="col-lg-2">
            <div class="logo">
              <img src="/assets/img/logo_lgr.png" alt="" />
            </div>
          </div>
          <div class="col-lg-8">
            <ul class="links">
              <li>
                <NuxtLink to="/home-app-landing" class="active">{{ rtl ? 'الرئيسية' : 'Home' }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page-about-5">{{ rtl ? 'من نحن' : 'about' }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page-product-5">{{ rtl ? 'المنتجات' : 'product' }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page-portfolio-5">{{ rtl ? 'المشاريع' : 'portfolio' }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page-services-5">{{ rtl ? 'الخدمات' : 'services' }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page-shop-5">{{ rtl ? 'المتجر' : 'shop' }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page-blog-5">{{ rtl ? 'الاخبار' : 'blog' }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/page-contact-5">{{ rtl ? 'اتصل بنا' : 'contact' }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-lg-2">
            <div class="dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" v-if="rtl">
              <button class="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/assets/img/lang.png" alt="" class="me-2" />
                  <small>العربية</small>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">English</a></li>
              </ul>
            </div>
            <div class="dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" v-else>
              <button class="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/assets/img/lang.png" alt="" class="me-2" />
                  <small>English</small>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">English</a></li>
                <li><a class="dropdown-item" href="#">Arabic</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copywrite text-center">
        <small class="small">
          {{ rtl ? '© 2022 حقوق التأليف والنشر' : '© 2022 Copyrights by' }} <a href="#" class="fw-bold text-decoration-underline">Iteck Co.</a> {{ rtl ? 'كل الحقوق محفوظة. صمم بواسطة' : 'All Rights Reserved. Designed by' }} <a href="https://themeforest.net/user/themescamp" class="fw-bold text-decoration-underline">ThemesCamp</a>
        </small>
      </div>
    </div>
    <img src="/assets/img/footer/footer_4_wave.png" alt="" class="wave" v-if="!noWave" />
  </footer>
</template>

<script>
export default {
  props: ['noWave', 'rtl'],
  methods: {
    handleMouseMove(event) {
      const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
      const dropDownMenu = dropDownToggler?.nextElementSibling;

      dropDownToggler?.classList?.add('show');
      dropDownMenu?.classList?.add('show');
    },
    handleMouseLeave(event) {
      const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
      const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
      const dropDownMenu = dropdown.querySelector('.dropdown-menu');

      dropDownToggler?.classList?.remove('show');
      dropDownMenu?.classList?.remove('show');
    }
  }
}
</script>
