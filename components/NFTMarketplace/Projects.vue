<template>
  <section class="projects section-padding style-12">
    <div class="container">
      <div class="section-head text-center mb-70 style-12">
        <h6 class="justify-content-center mb-3">
          <img src="/assets/img/icons/star2.png" alt="" class="icon" />
          <span class="mx-2"> Discover </span>
          <img src="/assets/img/icons/star2.png" alt="" class="icon" />
        </h6>
        <h2> New NFT <span> Arrivals </span> </h2>
      </div>
      <div class="content">
        <div class="mix_tabs mb-20">
          <span :class="`${index === 0 ? 'active' : ''} tab-link`" :data-filter="filter.filter"
            v-for="(filter, index) in projects.filters" :key="index" @click="addActiveClass">
            <img src="/assets/img/icons/star3.png" alt="" class="icon" /> {{ filter.text }}
          </span>
        </div>
        <div class="row items">
          <div :class="`col-lg-3 col-sm-6 mix ${project.filter}`" v-for="(project, index) in projects.projects"
            :key="index">
            <div class="project-card">
              <div class="top-inf">
                <span> <i class="fas fa-heart"></i> {{ project.hearts }} </span>
                <span> <i class="fas fa-sort color-yellowGreen"></i> {{ project.sort }} </span>
              </div>
              <div class="img img-cover">
                <img :src="project.image" alt="" />
                <a href="#" class="butn bg-yellowGreen rounded-3 hover-shadow"> <span class="text-dark"> <i
                      class="fal fa-shopping-basket me-1"></i> Buy Now </span> </a>
              </div>
              <div class="info">
                <small> Highest bid <span class="color-yellowGreen"> {{ project.bid }} </span> </small>
                <h6> {{ project.title }} </h6>
                <div class="btm-inf">
                  <p> <i class="fal fa-users color-yellowGreen"></i> {{ project.placeBit }}+ Place Bit </p>
                  <p> <i class="fal fa-history color-yellowGreen"></i> History </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '../../data/NFTMarketplace/projects.json';

export default {
  data() {
    return {
      projects
    }
  },
  methods: {
    addActiveClass(e) {
      document.querySelectorAll('span[data-filter]').forEach(el => el.classList.remove('active'));
      e.currentTarget.classList.add('active');
    }
  },
  mounted() {
    setTimeout(() => {
      if (!mixitup) return;
      mixitup('.projects')
    }, 0);
  },
}
</script>
