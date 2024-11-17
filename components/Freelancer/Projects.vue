<template>
  <section class="projects section-padding style-13 overflow-hidden">
    <div class="container">
      <div class="section-head text-center mb-40 style-13">
        <h6> portfolio </h6>
        <h2> Our Case & Projects </h2>
      </div>
      <div class="links-tabs">
        <ul class="nav nav-pills mb-40 justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation" v-for="(link, idx) in projectsData.linkTabs" :key="idx">
            <button :class="`nav-link ${idx === 0 ? 'active' : ''}`" :id="`pills-${link.id}-tab`" data-bs-toggle="pill"
              :data-bs-target="`#pills-${link.tab}`" type="button" role="tab" :aria-controls="link.control"
              :aria-selected="idx === 0 ? 'true' : 'false'">
              {{ link.name }}
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div :class="`tab-pane fade ${idx === 0 ? 'show active' : ''}`" :id="`pills-${tab.id}`" role="tabpanel"
          :aria-labelledby="`pills-${tab.id}-tab`" v-for="(tab, idx) in projectsData.tabContent" :key="idx">
          <div class="projects-slider13">
            <swiper class="overflow-visible" :options="swiperOptions">
              <swiper-slide v-for="(slide, index) in tab.slides" :key="index">
                <div class="project-card">
                  <a href="#" class="img img-cover">
                    <img :src="slide.image" alt="" />
                    <div class="info">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <div class="inf">
                            <p> {{ slide.subTitle }} </p>
                            <h6> {{ slide.title }} </h6>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="logo">
                            <img src="/assets/img/logos/39.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </swiper-slide>
            </swiper>
            <div class="text-center mt-50">
              <a href="#0" class="btn rounded-pill text-dark bg-white border-1 brd-gray shadow-lg hover-orange3"
                target="_blank">
                <small> More Works <i class="fal fa-plus ms-2"></i> </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="links">
        <div class="links-content">
          <a href="#"> <img src="/assets/img/logos/40.png" alt="" /> </a>
          <a href="#"> <img src="/assets/img/logos/41.png" alt="" /> </a>
          <a href="#"> <img src="/assets/img/logos/42.png" alt="" /> </a>
          <a href="#"> <img src="/assets/img/logos/43.png" alt="" /> </a>
          <a href="#"> <img src="/assets/img/logos/44.png" alt="" /> </a>
        </div>
        <p class="text-center"> <strong> 10000+ </strong> Happy users from around the world </p>
      </div>
    </div>
  </section>
</template>

<script>
import projectsData from '../../data/Freelancer/projects.json';

export default {
  data() {
    return {
      projectsData,
      swiperOptions: {
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        speed: 1000,
        autoplay: {
          delay: 5000
        },
        loop: true,
        pagination: false,
        navigation: false,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          787: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          }
        }
      }
    }
  },
}
</script>
