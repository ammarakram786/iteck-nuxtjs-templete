<template>
  <section class="projects style-6 p-0">
    <div class="content section-padding rounded-0">
      <div class="container">
        <div :class="`section-head text-center mb-60 style-${styleType}`">
          <h2 class="mb-20">{{ rtl ? 'المشاريع' : 'Related' }} <span>{{ rtl ? 'ذات الصلة' : 'Projects' }}</span> </h2>
          <p>{{ rtl ? 'لدينا فريق من ذوي الخبرة من موظفي الإنتاج والتفتيش لضمان الجودة' : 'We have an experienced team of production and inspection personnel to ensure quality.' }}</p>
        </div>
        <div class="slider-3items slider-style-6">
          <swiper class="swiper-container pb-0" :options="swiperOptions">
            <swiper-slide v-for="(project, index) in projects" :key="index">
              <div class="project-card style-6" :style="{direction: rtl ? 'rtl' : 'ltr'}">
                <div class="img">
                  <img :src='project.image' alt="" />
                </div>
                <div class="info">
                  <h3 class="title">
                    <NuxtLink :to='rtl ? "/rtl-page-single-project" : "/page-single-project-5"'>{{ project.title }}</NuxtLink>
                  </h3>
                  <small class="color-blue6">
                    <span v-for="(type, i) in project.type" :key="i">
                      <a href="#">{{ type }}</a>
                      <template v-if="i !== project.type.length - 1"> & &nbsp;</template>
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
          </swiper>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projectsData from '../../data/SingleProject/projects.json';
import projectsDataRTL from '../../data/SingleProject/projects-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  data() {
    return {
      projects: this.rtl ? projectsDataRTL : projectsData,
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
