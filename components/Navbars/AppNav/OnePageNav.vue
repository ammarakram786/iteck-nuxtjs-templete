<template>
  <nav class="navbar navbar-expand-lg navbar-light style-4" id="main-nav" ref={navbarRef}>
    <div class="container">
      <a class="navbar-brand" href="#" data-scroll-nav="0" @click="ScrollToSection">
        <img src="/assets/img/logo_lgr.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="1" @click="ScrollToSection">
              {{ rtl ? 'خدماتنا' : 'Featured' }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="2" @click="ScrollToSection">
              {{ rtl ? 'من نحن' : 'About' }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="3" @click="ScrollToSection">
              {{ rtl ? 'تطبيقات شائعة' : 'Popular Apps' }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="4" @click="ScrollToSection">
              {{ rtl ? 'شاشات التطبيق' : 'screens' }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="5" @click="ScrollToSection">
              {{ rtl ? 'اراء العملاء' : 'Testimonials' }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="6" @click="ScrollToSection">
              {{ rtl ? 'خطه الاسعار' : 'Pricing Plan' }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="7" @click="ScrollToSection">
              {{ rtl ? 'اراء العملاء' : 'faq' }}
            </a>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-flex align-items-center">
            <a href="#0" class="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold" data-scroll-nav="8" @click="ScrollToSection">
              <span>{{ rtl ? 'تحميل' : 'download' }} <i class="bi bi-download ms-1"></i> </span>
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
    const sections = document.querySelectorAll('[data-scroll-index]');

    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const index = section.getAttribute('data-scroll-index');
        let top = section.getBoundingClientRect().top;
        let height = section.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        let allowedOffest = -50;

        if (height > windowHeight) {
          allowedOffest = height - windowHeight - 50;
        }

        if (windowHeight - top > 200 && top > allowedOffest) {
          document.querySelector(`[data-scroll-nav="${index}"]`)?.classList?.add('active');
        } else {
          document.querySelector(`[data-scroll-nav="${index}"]`)?.classList?.remove('active');
        }
      });
    });
  },
}
</script>
