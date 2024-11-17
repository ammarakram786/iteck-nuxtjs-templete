<template>
  <nav class="navbar navbar-expand-lg navbar-dark style-2 position-absolute w-100 p-0" ref="navbarRef">
    <div class="container">
      <a class="navbar-brand" href="#" data-scroll-nav="0" @click="ScrollToSection">
        <img src="/assets/img/logo_ll.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
          <li class="nav-item dropdown">
            <a class="nav-link" data-scroll-nav="1" @click="ScrollToSection">
              about us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="2" @click="ScrollToSection">
              services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="3" @click="ScrollToSection">
              portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="4" @click="ScrollToSection">
              why us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="5" @click="ScrollToSection">
              testimonials
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="6" @click="ScrollToSection">
              pricing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="7" @click="ScrollToSection">
              blog
            </a>
          </li>
        </ul>
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
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef);

    const sections = document.querySelectorAll('[data-scroll-index]');

    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const index = section.getAttribute('data-scroll-index');

        let sectionTop = section.getBoundingClientRect().top;
        let sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < 400 && sectionBottom > 400) {
          document.querySelector(`[data-scroll-nav="${index}"]`).classList.add('active');
        } else {
          document.querySelector(`[data-scroll-nav="${index}"]`).classList.remove('active');
        }
      });
    });
  },
}
</script>
