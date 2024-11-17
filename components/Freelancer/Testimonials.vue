<template>
  <section class="testimonials section-padding style-13">
    <div class="container">
      <div class="section-head text-center mb-30 style-13">
        <h6> testimonials </h6>
        <h2> Users Feedback </h2>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-4" v-for="(testimonial, idx) in testimonials" :key="idx">
            <div class="testi-card">
              <div class="info">
                <span class="card-tag"> {{ testimonial.category }} </span>
                <p> “ {{ testimonial.content }} ” </p>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <img src="/assets/img/testimonials/testi_13_icon.png" alt="" class="icon" />
              </div>
              <div class="img">
                <img :src="testimonial.image" alt="" class="user_img" />
                <h6> {{ testimonial.author.name }} </h6>
                <p> {{ testimonial.author.position }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import testimonials from '../../data/Freelancer/testimonials.json';

export default {
  data() {
    return {
      testimonials
    }
  },
}
</script>
