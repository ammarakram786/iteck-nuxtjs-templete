<template>
  <section class="testimonials style-9 section-padding">
    <div class="container">
      <div class="testi-head mb-80 wow fadeInUp">
        <div class="row justify-content-between">
          <div class="col-lg-5">
            <h3> Trusted by 20+ Million Users Around The World. </h3>
          </div>
          <div class="col-lg-4 text-lg-end">
            <div class="reviews-numb">
              <div class="img">
                <img src="/assets/img/testimonials/trust_logo.png" alt="" class="logo" />
                <div class="stars">
                  <img src="/assets/img/testimonials/trust_star.png" alt="" class="star" />
                  <img src="/assets/img/testimonials/trust_star.png" alt="" class="star" />
                  <img src="/assets/img/testimonials/trust_star.png" alt="" class="star" />
                  <img src="/assets/img/testimonials/trust_star.png" alt="" class="star" />
                  <img src="/assets/img/testimonials/trust_star.png" alt="" class="star" />
                </div>
              </div>
              <div class="info text-start">
                <p class="color-666"> {{ testimonialsData.totalRating }} out of 5 based on </p>
                <h6 class="color-darkBlue2 fw-bold"> {{ testimonialsData.totalReviews }} reviews </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="testi-body">
        <div class="row gx-5">
          <div
            :class="`col-lg-4 ${index !== testimonialsData.testimonials.length - 1 ? 'border-1 border-end brd-gray wow fadeInUp':''}`"
            v-for="(testimonial, index) in testimonialsData.testimonials"
            :key="index"
            >
            <div :class="`testi-card p${index === 0 ? 'e' : index === 1 ? 'x' : 's'}-lg-4`">
              <div class="stars">
                <img v-for="(_,i) in Array(testimonial.stars).fill()" :key="i" src="/assets/img/testimonials/trust_star.png" alt="" class="star" />
              </div>
              <div class="text">
                “ {{ testimonial.content }} ”
              </div>
              <div class="author">
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
import testimonialsData from '../../data/CloudHosting/testimonials.json';

export default {
  data() {
    return {
      testimonialsData
    }
  },
}
</script>
