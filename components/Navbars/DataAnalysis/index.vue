<template>
  <div class="navs-container pt-4">
    <TopNav />
    <nav class="navbar navbar-expand-lg navbar-light style-8" ref="navbarRef">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/assets/img/logo_home8.png" alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0 ps-4">
            <li class="nav-item dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
              <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Homes
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><NuxtLink to="/" class="dropdown-item">Landing Preview</NuxtLink></li>
                <li><NuxtLink to="/home-it-solutions2" class="dropdown-item"> Creative It Solutions</NuxtLink></li>
                <li><NuxtLink to="/home-data-analysis" class="dropdown-item"> Data Analysis</NuxtLink></li>
                <li><NuxtLink to="/home-app-landing" class="dropdown-item"> App Landing</NuxtLink></li>
                <li><NuxtLink to="/home-saas-technology" class="dropdown-item"> Saas Technology</NuxtLink></li>
                <li><NuxtLink to="/home-marketing-startup" class="dropdown-item"> Marketing Startup</NuxtLink></li>
                <li><NuxtLink to="/home-it-solutions" class="dropdown-item"> It Solution</NuxtLink></li>
                <li><NuxtLink to="/home-software-company" class="dropdown-item"> Software Company</NuxtLink></li>
                <li><NuxtLink to="/home-digital-agency" class="dropdown-item"> Digital Agency</NuxtLink></li>
                <li>
                  <NuxtLink to="/home-shop-modern" class="dropdown-item"> Modren Shop</NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                pages
                <!-- <small class="hot alert-danger text-danger">hot</small> -->
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><NuxtLink to="/page-about-app" class="dropdown-item">about</NuxtLink></li>
                <li><NuxtLink to="/page-product-app" class="dropdown-item">product</NuxtLink></li>
                <li><NuxtLink to="/page-services-app" class="dropdown-item">services</NuxtLink></li>
                <li><NuxtLink to="/page-shop-app" class="dropdown-item">shop</NuxtLink></li>
                <li><NuxtLink to="/page-single-project-app" class="dropdown-item">single project</NuxtLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink to="/page-portfolio-app" class="nav-link">
                portfolio
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/page-blog-app" class="nav-link">
                blog
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/page-contact-app" class="nav-link">
                contact
              </NuxtLink>
            </li>
          </ul>
          <div class="nav-side">
            <button class="butn bg-transparent border-main border-2 rounded-pill hover-orange1 color-main hover-shadow" type="submit">
              <span class=""> Request A Demo <i class="fal fa-long-arrow-right ms-2"></i> </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import TopNav from './TopNav';
import navbarScrollEffect from "../../../common/navbarScrollEffect";

export default {
  components: {
    TopNav
  },
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
  },
}
</script>
