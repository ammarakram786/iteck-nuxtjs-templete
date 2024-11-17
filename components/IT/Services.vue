<template>
  <section class="services_projects section-padding">
    <div class="container">
      <div data-scroll-index="2" data-scroll-internal-section>
        <div class="section-head mb-30 text-center">
          <h2 class="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">services</h2>
        </div>
        <div class="services_slider position-relative">
          <swiper class="swiper-container" :options="servicesSliderOptions">
            <swiper-slide v-for="(service, index) in services.services" :key="index">
              <div class="service-box text-white text-center px-4 py-2 brd-light border-end style-2">
                <div class="icon mb-30">
                  <img :src="service.image" alt="" />
                </div>
                <div class="info">
                  <h4>{{ service.title }}</h4>
                  <p class="op-7 mt-20 mb-30 px-3">{{ service.desc }}</p>
                  <div class="tags d-flex flex-wrap justify-content-center mt-30 style-2">
                    <a href="#" class="me-1" v-for="(tag, i) in service.tags" :key="i">{{ tag }}</a>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="pagination_circle position-relative pagi_white mt-70">
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <div data-scroll-index="3" data-scroll-internal-section>
        <div class="section-head mb-30 text-center">
          <h2 class="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70 pt-100">works</h2>
        </div>
        <div class="works_slider position-relative">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="swiper-container">
                <swiper class="swiper-wrapper" :options="worksSliderOptions">
                  <swiper-slide v-for="(work, index) in services.works" :key="index">
                    <div class="work_card text-center d-block">
                      <div class="img img-cover radius-6 overflow-hidden imgrotate-scale-hover">
                        <img :src="work.image" alt="" />
                      </div>
                      <div class="info">
                        <h4 class="text-white mt-4">
                          <NuxtLink to="/page-single-project-5">{{ work.title }}</NuxtLink>
                        </h4>
                        <small class="color-lightBlue text-uppercase">
                          <a href="#" class="me-1" v-for="(tag, i) in work.tags" :key="i">{{ tag }}</a>
                        </small>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <div class="swiper-button-next radius-50 bg-transparent border brd-light"></div>
          <div class="swiper-button-prev radius-50 bg-transparent border brd-light"></div>
        </div>
        <div class="text-center">
          <NuxtLink to="/page-portfolio-5" class="btn sm-butn border text-white radius-9 mt-60 hover-darkBlue">
            <span>See All Projects</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../../data/IT/services.json';

export default {
  data() {
    return {
      services,
      servicesSliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
          el: ".services_slider .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: '.services_slider .swiper-button-next',
          prevEl: '.services_slider .swiper-button-prev'
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 2
          },
          787: {
            slidesPerView: 2
          },
          991: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 3
          }
        }
      },
      worksSliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
          el: ".works_slider .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: '.works_slider .swiper-button-next',
          prevEl: '.works_slider .swiper-button-prev'
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 1
          },
          787: {
            slidesPerView: 2
          },
          991: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 2
          }
        }
      }
    }
  },
}
</script>
