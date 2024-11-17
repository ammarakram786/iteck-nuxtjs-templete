<template>
  <nav class="navbar navbar-expand-lg navbar-dark style-3 position-absolute w-100" ref="navbarRef">
    <div class="container">
      <a class="navbar-brand" href="#0" data-scroll-nav="0" @click="ScrollToSection">
        <img src="/assets/img/logo_ll.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="1" @click="ScrollToSection">
              testimonials
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="2" @click="ScrollToSection">
              services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="3" @click="ScrollToSection">
              about us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="4" @click="ScrollToSection">
              portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="5" @click="ScrollToSection">
              pricing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="6" @click="ScrollToSection">
              team
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="7" @click="ScrollToSection">
              blog
            </a>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-flex ps-4">
            <a href="#" class="search-icon me-5">
              <i class="bi bi-search"></i>
            </a>
            <div class="dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
              <button
                class="icon-35 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover text-white"
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/assets/img/lang.png" alt="" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">English</a></li>
                <li><a class="dropdown-item" href="#">Arabic</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import scrollToSection from '../../../common/scrollToSection';
import navbarScrollEffect from "../../../common/navbarScrollEffect";

export default {
  data() {
    return {
      scrollToSection
    }
  },
  methods: {
    ScrollToSection(e) {
      this.scrollToSection(e);
    },
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

    const sections = document.querySelectorAll('[data-scroll-index]');

    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const index = section.getAttribute('data-scroll-index');
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const scroll = window.scrollY;

        if (scroll + 200 > offset && scroll + 200 < offset + height) {
          document.querySelector(`[data-scroll-nav="${index}"]`).classList.add('active');
        } else {
          document.querySelector(`[data-scroll-nav="${index}"]`).classList.remove('active');
        }
      });
    });
  },
}
</script>
