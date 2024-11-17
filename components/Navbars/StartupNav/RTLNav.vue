<template>
  <nav :class="`navbar navbar-expand-lg navbar-light style-6 ${whiteNotRounded ? 'bg-white rounded-0 position-relative' : ''}`" ref="navbarRef">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/assets/img/logo_home6.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              الرئيسية
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><NuxtLink to="/home-app-landing" class="dropdown-item">صفحة هبوط للتطبيق</NuxtLink></li>
              <li><NuxtLink to="/home-saas-technology" class="dropdown-item">التكنولوجى</NuxtLink></li>
              <li><NuxtLink to="/home-marketing-startup" class="dropdown-item">التسويق الالكترونى</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              الصفحات الداخلية
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><NuxtLink to="/rtl-page-about" class="dropdown-item">من نحن</NuxtLink></li>
              <li><NuxtLink to="/rtl-page-product" class="dropdown-item">المنتجات</NuxtLink></li>
              <li><NuxtLink to="/rtl-page-services" class="dropdown-item">الخدمات</NuxtLink></li>
              <li><NuxtLink to="/rtl-page-shop" class="dropdown-item">المتجر</NuxtLink></li>
              <li><NuxtLink to="/rtl-page-single-project" class="dropdown-item">تفاصيل المشروع</NuxtLink></li>
              <li><NuxtLink to="/rtl-page-single-post" class="dropdown-item">تفاصيل الخبر</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink to="/rtl-page-portfolio" class="nav-link">
              المشاريع
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/rtl-page-blog" class="nav-link">
              المدونة
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/rtl-page-contact" class="nav-link">
              اتصل بنا
            </NuxtLink>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-flex align-items-center">
            <NuxtLink to="/rtl-page-contact" class="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold">
              <span>
                <i class="bi bi-chat-dots me-2"></i>
                لنتحدث الأن !
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import navbarScrollEffect from "../../../common/navbarScrollEffect";

export default {
  props: ['whiteNotRounded'],
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
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef);
  }
}
</script>
