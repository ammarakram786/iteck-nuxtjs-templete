<template>
  <section class="services style-9 bg-gray2">
    <div class="services-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="(service, index) in services" :key="index">
            <div class="service-card wow fadeInUp" :data-wow-delay="`${index * 0.2}s`">
              <div class="img-icon">
                <img :src="service.icon" alt="" />
              </div>
              <h3> {{ service.title.partOne }} <br />  {{ service.title.partTwo }} </h3>
              <p> {{ service.description }} </p>
              <a href="#" class="icon"> <i class="far fa-long-arrow-right"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="con-info wow fadeInDown">
        <h5> Need help? Call our award-winning support team at <strong> 040-67607600 </strong> </h5>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../../data/CloudHosting/services.json';

export default {
  data() {
    return {
      services
    }
  },
}
</script>
