<template>
  <section class="services style-10 overflow-hidden">
    <div class="container">
      <div class="content">
        <div class="row gx-5">
          <div class="col-lg-3 col-sm-6" v-for="(service, idx) in services" :key="idx">
            <div class="services-card">
              <h6> Service #{{ service.number }} </h6>
              <h3> {{ service.title }} </h3>
              <p> {{ service.details }} </p>
              <div class="icon">
                <img :src="service.image" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="section-title"> services </div>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../../data/CyberSecurity/services.json';

export default {
  data() {
    return {
      services
    }
  },
}
</script>
