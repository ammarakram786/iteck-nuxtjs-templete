<template>
  <nav class="navbar navbar-expand-lg navbar-light style-5" :class="{'bg-transparent': isTransparent}">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/assets/img/logo_home5.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
          <li class="nav-item dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Homes
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><NuxtLink to="/" class="dropdown-item">Landing Preview</NuxtLink></li>
              <li><NuxtLink to="/home-it-solutions2" class="dropdown-item"> Creative It Solutions</NuxtLink></li>
              <li><NuxtLink to="/home-data-analysis" class="dropdown-item"> Data Analysis</NuxtLink></li>
              <li><NuxtLink to="/home-app-landing" class="dropdown-item">App Landing</NuxtLink></li>
              <li><NuxtLink to="/home-saas-technology" class="dropdown-item">Saas Technology</NuxtLink></li>
              <li><NuxtLink to="/home-marketing-startup" class="dropdown-item">Marketing Startup</NuxtLink></li>
              <li><NuxtLink to="/home-it-solutions" class="dropdown-item">It Solution</NuxtLink></li>
              <li><NuxtLink to="/home-software-company" class="dropdown-item">Software Company</NuxtLink></li>
              <li><NuxtLink to="/home-digital-agency" class="dropdown-item">Digital Agency</NuxtLink></li>
              <li>
                <NuxtLink to="/home-shop-modern" class="dropdown-item"> Modren Shop</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              pages
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><NuxtLink to="/page-about-5" class="dropdown-item">about</NuxtLink></li>
              <li><NuxtLink to="/page-product-5" class="dropdown-item">product</NuxtLink></li>
              <li><NuxtLink to="/page-services-5" class="dropdown-item">services</NuxtLink></li>
              <li><NuxtLink to="/page-shop-5" class="dropdown-item">shop</NuxtLink></li>
              <li><NuxtLink to="/page-single-project-5" class="dropdown-item">single project</NuxtLink></li>
              <li><NuxtLink to="/page-single-post-5" class="dropdown-item">single post</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-portfolio-5" class="nav-link">
              portfolio
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-blog-5" class="nav-link">
              blog
              <small class="fs-10px icon-20 rounded-pill bg-blue5 text-white fw-bold px-3 ms-2 d-inline-flex justify-content-center align-items-center">3</small>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-contact-5" class="nav-link">
              contact
            </NuxtLink>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-flex align-items-center">
            <span class="nav-item">
              <NuxtLink to="/page-contact-5" class="nav-link">
                <i class="bi bi-person fs-5 me-2"></i>
                sign in
              </NuxtLink>
            </span>
            <NuxtLink to="/page-contact-5" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
              <span>Start Free Trial <i class="bi bi-arrow-right ms-1"></i> </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['isTransparent'],
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
