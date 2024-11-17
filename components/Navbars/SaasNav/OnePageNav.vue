<template>
  <nav class="navbar navbar-expand-lg navbar-light style-5" ref="navbarRef">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" data-scroll-nav="0" @click="ScrollToSection">
        <img src="/assets/img/logo_home5.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link" data-scroll-nav="1" @click="ScrollToSection">
              about us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="2" @click="ScrollToSection">
              clients
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="3" @click="ScrollToSection">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="4" @click="ScrollToSection">
              pricing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="5" @click="ScrollToSection">
              testimonials
            </a>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-flex align-items-center">
            <a href="#0" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold" data-scroll-nav="6">
              <span>download app <i class="bi bi-download ms-1"></i> </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import scrollToSection from '../../../common/scrollToSection';

export default {
  data() {
    return {
      scrollToSection
    }
  },
  methods: {
    ScrollToSection(e) {
      this.scrollToSection(e);
    }
  },
  mounted() {
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