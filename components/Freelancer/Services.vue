<template>
  <section class="services style-13 section-padding">
    <div class="container">
      <div class="section-head text-center mb-40 style-13">
        <h6> services </h6>
        <h2> Essential Services </h2>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-4" v-for="(service, idx) in services" :key="idx">
            <div class="item">
              <div class="cont">
                <div class="title">
                  <img :src="service.image" alt="" class="icon" />
                  <span> {{ service.title }} </span>
                </div>
                <p> {{ service.details }} </p>
                <a href="#"> Service Details </a>
              </div>
              <span class="circle"></span>
              <img alt="" src="/assets/img/services/pattern1.png" class="pattern" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../../data/Freelancer/services.json';

export default {
  data() {
    return {
      services
    }
  },
}
</script>
