<template>
  <nav class="navbar navbar-expand-lg navbar-light style-6" ref="navbarRef">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" data-scroll-nav="0" @click="ScrollToSection">
        <img src="/assets/img/logo_home6.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-scroll-nav="1" @click="ScrollToSection">
              {{ rtl ? "من نحن" : "about us" }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="2" @click="ScrollToSection">
              {{ rtl ? "خدماتنا" : "services" }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="3" @click="ScrollToSection">
              {{ rtl ? "مشاريعنا" : "portfolio" }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="4" @click="ScrollToSection">
              {{ rtl ? "لماذا نحن" : "why us" }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="5" @click="ScrollToSection">
              {{ rtl ? "اراء العملاء" : "testimonials" }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="6" @click="ScrollToSection">
              {{ rtl ? "عملائنا" : "clients" }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="7" @click="ScrollToSection">
              {{ rtl ? "فريق العمل" : "team" }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="8" @click="ScrollToSection">
              {{ rtl ? "المدونة" : "blog" }}
            </a>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-flex align-items-center">
            <a href="#0" class="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold" data-scroll-nav="9" @click="ScrollToSection">
              <span>
                <i class="bi bi-chat-dots me-2"></i>
                  {{ rtl ? "لنتحدث الأن !" : "Let’s Chat!" }}
              </span>
            </a>
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
  props: ['rtl'],
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
        let top = section.getBoundingClientRect().top;
        let height = section.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        let allowedOffest = -parseInt(window.getComputedStyle(section, null).getPropertyValue('padding-top')) - 300;

        if (height > windowHeight) {
          allowedOffest = -parseInt(window.getComputedStyle(section, null).getPropertyValue('padding-top')) - (300 + height - windowHeight);
        }

        if (windowHeight - top > 300 && top > allowedOffest) {
          document.querySelector(`[data-scroll-nav="${index}"]`)?.classList?.add('active');
        } else {
          document.querySelector(`[data-scroll-nav="${index}"]`)?.classList?.remove('active');
        }
      });
    });
  },
}
</script>
