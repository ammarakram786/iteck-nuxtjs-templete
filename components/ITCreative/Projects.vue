<template>
  <section class="projects style-7 section-padding">
    <div class="content">
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="section-head style-4 mb-50">
            <div class="top-title mb-10">
              <img src="/assets/img/line_l.png" alt="" />
              <h5> Case Study </h5>
            </div>
            <h2 class="">
              Creative <span> Works </span> <br /> We Done
            </h2>
          </div>
          <div class="projects-tabs">
            <ul class="nav nav-pills flex-column mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation" v-for="(type, index) in projects.types" :key="index">
                <button :class="`nav-link ${index === 0 ? 'active' : ''}`" :id="`pills-proj${type.id}-tab`" data-bs-toggle="pill" :data-bs-target="`#pills-proj${type.tab}`" type="button" role="tab" :aria-controls="`pills-proj${type.tab}`" aria-selected="true">
                  <i class="fal fa-long-arrow-right me-2 color-blue7"></i> {{type.title}}
                </button>
              </li>
            </ul>
            <div class="swiper-button-next">
              <i class="far fa-long-arrow-right"></i>
            </div>
            <div class="swiper-button-prev">
              <i class="far fa-long-arrow-left"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="tab-content" id="pills-tabContent">
            <div :class="`tab-pane fade ${index === 0 ? 'show active' : ''}`" :id="`pills-proj${tab.id}`" role="tabpanel" :aria-labelledby="`pills-proj${tab.id}-tab`" v-for="(tab, index) in projects.tabs" :key="index">
              <div class="projects-slider7">
                <swiper :options="swiperOptions">
                  <swiper-slide v-for="(project, i) in tab.projects" :key="i">
                    <ProjectCard :project="project" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
            <a href="#0" class="btn btn-icon-circle rounded-pill bg-white fw-bold mt-50">
              <small> More Projects <i class="fas fa-long-arrow-alt-right bg-light"></i> </small>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard';
import projects from '../../data/ITCreative/projects.json';

export default {
  data() {
    return {
      projects,
      swiperOptions: {
        spaceBetween: 40,
        speed: 1000,
        pagination: false,
        navigation: {
          nextEl: '.projects.style-7 .swiper-button-next',
          prevEl: '.projects.style-7 .swiper-button-prev'
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 5000
        },
        observer: true,
        observeParents: true,
        loop: false,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 1
          },
          787: {
            slidesPerView: 1
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
  components: {
    ProjectCard
  }
}
</script>