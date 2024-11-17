<template>
  <section class="services style-7 pt-100">
    <div class="container">
      <div class="section-head text-center style-4 mb-50">
        <div class="top-title mb-10">
          <img src="/assets/img/line_l.png" alt="" />
          <h5> Services </h5>
          <img src="/assets/img/line_r.png" alt="" />
        </div>
        <h2 class="">
          What We <span> Provide </span> <br /> As A Company
        </h2>
      </div>
      <div class="services-content pb-100">
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="(service, index) in services" :key="index">
            <div class="service-item-style7">
              <div class="img">
                <img :src="service.image" alt="" />
                <span class="icon">
                  <i :class="service.icon"></i>
                </span>
              </div>
              <div class="info">
                <h6>{{ service.title }}</h6>
                <p class="text">{{ service.description }}</p>
                <a href="#"> <i class="fal fa-long-arrow-right"></i> Read More  <i class="fal fa-long-arrow-right"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../../data/ITCreative/services.json';

export default {
  data() {
    return {
      services
    }
  },
}
</script>

<style>

</style>