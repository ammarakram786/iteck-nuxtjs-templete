<template>
  <section class="pricing style-3" data-scroll-index="5">
    <div class="container">
      <div class="content section-padding">
        <div class="row">
          <div class="col-lg-4">
            <div class="info">
              <div class="section-head style-3 mb-40">
                <h3> Affordable <span> Price </span></h3>
              </div>
              <small class="text text-gray mb-30">
                Kick-start your project with our pricing plan. We handle all the practical aspects
                related to hiring and hosting your team at our premises, thus saving you half a cost
                and a lot of efforts. Lorem ispum dolor sit amet
              </small>
              <small class="text text-gray d-block">
                Not find your plan, need a tailored-plan? <br /> <a href="#" class="color-blue2 text-decoration-underline">Contact</a> us now!
              </small>
              <NuxtLink to="/page-services-5" class="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn">
                <span>Our Services</span>
              </NuxtLink>
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1">
            <div class="price-cards">
              <div class="row">
                <div class="col-lg-6" v-for="(plan, i) in plans" :key="i">
                  <div :class="`pricing-card ${plan.recommended ? 'dark-card':''} style-3 mb-30 mb-lg-0`">
                    <div class="card-head">
                      <div class="title">
                        <h4>{{ plan.title }} <small v-if="plan.recommended">Recommended</small></h4>
                        <small>{{ plan.description }}</small>
                      </div>
                      <div class="price">
                        <h5>{{ plan.price }}</h5>
                        <small>per month</small>
                      </div>
                    </div>
                    <div class="card-body">
                      <ul>
                        <li v-for="(feature, i) in plan.features" :key="i">
                          <i class="bi bi-check"></i>
                          <small>{{ feature }}</small>
                        </li>
                      </ul>
                    </div>
                    <NuxtLink to="/page-contact-5" class="btn rounded-pill bg-blue2 sm-butn w-100 text-white">
                      <span>Get Started Now</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/testimonials/testi3_lines.png" alt="" class="testi_lines w-100" />
      </div>
    </div>
  </section>
</template>

<script>
import plans from '../../data/Software/plans.json';

export default {
  data() {
    return {
      plans
    }
  },
}
</script>
