<template>
  <section :class="`portfolio-projects section-padding pt-50 style-1 ${styleType === '5' ? '':'bg-white'}`">
    <div class="container">
      <div :class="`section-head text-center style-${styleType} ${styleType === '5' ? 'mb-60':'mb-40'}`">
        <small class="title_small" v-if="styleType === '4'">portfolio</small>
        <h2 class="mb-20">{{ rtl ? '' : 'Our' }}  <span> {{ rtl ? 'مشاريعنا' : 'Projects' }} </span> </h2>
        <p>{{ rtl ? 'لدينا فريق من ذوي الخبرة من موظفي الإنتاج والتفتيش لضمان الجودة.' : 'We have an experienced team of production and inspection personnel to ensure quality.' }}</p>
      </div>
      <div class="controls">
        <button v-for="(filter, i) in projectsData.filters" :key="i" type="button" class="control" :data-filter="filter.filter">{{ filter.title }}</button>
      </div>
      <section class="portfolio style-1">
        <div class="content">
          <div class="row mix-container">
            <div :class="`col-lg-4 mix ${project.filter}`" v-for="(project, i) in projectsData.projects" :key="i">
              <div :class="`portfolio-card ${i !== projectsData.projects.length - 1 ? 'mb-50':''}`">
                <div class="img">
                  <img :src="project.image" alt="" />
                </div>
                <div class="info">
                  <h5>
                    <NuxtLink :to='rtl ? "/rtl-page-single-project" : "/page-single-project-5"'>
                      {{ project.title }}
                    </NuxtLink>
                  </h5>
                  <small class="d-block color-main text-uppercase">{{ project.type }}</small>
                  <div class="text">
                    {{ project.details }}
                  </div>
                  <div class="tags">
                    <a v-for="(tag, i) in project.tags" :key="i" href="#" class="me-1">{{ tag }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a href="#" :class="`btn rounded-pill fw-bold ${styleType === '5' ? 'mt-30 sm-butn hover-blue2 blue5-3Dbutn':'me-4 text-white bg-blue4'}`" target="_blank">
            <small>{{ rtl ? 'مشاهدة المزيد' : 'Show More' }} (24)</small>
          </a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import projects from '../../data/Portfolio/projects.json';
import projectsRTL from '../../data/Portfolio/projects-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  computed: {
    projectsData() {
      return this.rtl ? projectsRTL : projects;
    }
  },
  mounted() {
    setTimeout(() => {
      let mixitup = window.mixitup;

      if (!mixitup) return;
      mixitup('.portfolio-projects')
    }, 0);
  },
}
</script>
