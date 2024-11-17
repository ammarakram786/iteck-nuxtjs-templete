<template>
  <section class="testimonials style-8 section-padding bg-gray2">
    <div class="container">
      <div class="section-head text-center style-8 mb-80 wow fadeInUp">
        <h6> testimonials </h6>
        <h3> Happy User Reviews </h3>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-4" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testi-card wow fadeInUp">
              <div class="info">
                <div class="stars">
                  <i class="fas fa-star" v-for="(_, i) in Array(testimonial.stars).fill()" :key="i"></i>
                </div>
                <p> “ {{ testimonial.text }} ” </p>
                <img src="/assets/img/icons/qout8.png" alt="" class="icon" />
              </div>
              <div class="author mt-40">
                <div class="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                  <img :src="testimonial.author.image" alt="" />
                </div>
                <div class="inf">
                  <p> {{ testimonial.author.position }} </p>
                  <h6> {{ testimonial.author.name }} </h6>
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
import testimonials from '../../data/DataAnalysis/testimonials.json';

export default {
  data() {
    return {
      testimonials
    }
  },
}
</script>
