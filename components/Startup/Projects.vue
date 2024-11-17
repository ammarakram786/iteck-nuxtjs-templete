<template>
  <section class="projects style-6" data-scroll-index="3">
    <div class="content section-padding">
      <div class="container">
        <div class="section-head mb-40 d-flex justify-content-between align-items-center style-6">
          <h2 class="mb-20" v-if="rtl">اخر <span> <small>المشاريع</small> </span></h2> 
          <h2 class="mb-20" v-else>Features <span><small>Projects</small></span></h2>
          <NuxtLink to="rtl-page-portfolio" class="small text-decoration-underline text-uppercase" v-if="rtl">
            مشاهدة جميع المشاريع
          </NuxtLink>
          <NuxtLink to="/page-portfolio-5" class="small text-decoration-underline text-uppercase" v-else>
            See All Projects
          </NuxtLink>
        </div>
        <div class="slider-3items slider-style-6">
          <swiper class="swiper-container pb-70" :options="swiperOptions">
                <swiper-slide v-for="(project, index) in data" :key="index">
                  <div class="project-card style-6">
                    <div class="img">
                      <img :src="project.image" alt="" />
                    </div>
                    <div class="info">
                      <h3 class="title">
                        <NuxtLink to="/rtl-page-single-project" v-if="rtl">{{ project.title }}</NuxtLink>
                        <NuxtLink to="/page-single-project-5" v-else>{{ project.title }}</NuxtLink>
                      </h3>
                      <small class="color-blue6">
                        <span v-for="(type, i) in project.type" :key="i">
                          <a href="#">{{ type }}</a>
                          <template v-if="i !== project.type.length - 1">&nbsp;</template>
                        </span>
                      </small>
                      <div class="text">
                        {{ project.text }}
                      </div>
                      <div class="tags">
                        <span v-for="(tag, i) in project.tags" :key="i" class="me-1">
                          <a href="#">{{ tag }}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              ))
            }
          </swiper>
          <div class="swiper-pagination"></div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projectData from '../../data/Startup/project.json';
import projectDataRTL from '../../data/Startup/project-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    data() {
      return this.rtl ? projectDataRTL : projectData;
    },
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
          el: ".slider-3items .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: '.slider-3items .swiper-button-next',
          prevEl: '.slider-3items .swiper-button-prev'
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
            slidesPerView: 3
          }
        }
      }
    }
  },
}
</script>
