<template>
  <section class="projects style-8 section-padding bg-gray2">
    <div class="container">
      <div class="section-head style-8 mb-80 wow fadeInUp">
        <h6> case study </h6>
        <h3> Completed Projects </h3>
        <div class="arrows">
          <div class="swiper-button-next">
            <i class="fal fa-long-arrow-right"></i>
          </div>
          <div class="swiper-button-prev">
            <i class="fal fa-long-arrow-left"></i>
          </div>
        </div>
      </div>
      <div class="content wow fadeIn">
        <div class="projects-slider8">
          <swiper class="swiper-container" :options="swiperOptions">
            <swiper-slide v-for="(project, index) in projects" :key="index">
              <div class="project-card">
                <div class="row align-items-center">
                  <div class="col-lg-6">
                    <div class="img">
                      <img :src="project.image" alt="" class="main-img" />
                      <div class="tags">
                        <a href="#"> {{project.tag}} </a>
                      </div>
                      <img src="/assets/img/about/about7_chart.png" alt="" class="img-chart slide_up_down" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="info">
                      <div class="logo">
                        <img :src="project.logo" alt="" />
                      </div>
                      <h4 class="title"> {{project.title}} </h4>
                      <p> {{project.text}} </p>
                      <div class="proj-det">
                        <div class="item">
                          <p> Client Name </p>
                          <h6> {{project.client.name}} </h6>
                        </div>
                        <div class="item">
                          <p> Budget </p>
                          <h6> {{project.client.budget}} </h6>
                        </div>
                        <div class="item">
                          <p> Estimate </p>
                          <h6> {{project.client.estimate}} </h6>
                        </div>
                        <a href="#" class="icon">
                          <i class="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '../../data/DataAnalysis/projects.json';

export default {
  data() {
    return {
      projects,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1200,
        pagination: false,
        navigation: {
          nextEl: '.projects.style-8 .swiper-button-next',
          prevEl: '.projects.style-8 .swiper-button-prev'
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        loop: false
      }
    }
  },
}
</script>
