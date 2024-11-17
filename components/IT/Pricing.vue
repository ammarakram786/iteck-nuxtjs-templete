<template>
  <section class="pricing style-2 border-top brd-light section-padding" data-scroll-index="6">
    <div class="container">
      <div class="section-head mb-30 text-center">
        <h2 class="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">Pricing & plan</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="content">
            <div class="toggle_switch d-flex align-items-center justify-content-center mb-20">
              <div class="form-check form-switch text-white p-0">
                <label class="form-check-label" for="monthly-input2"><small>Billed monthly</small></label>
                <input class="form-check-input float-none color-lightBlue" type="checkbox" id="monthly-input2" checked @change="togglePlanDuration" />
                <label class="form-check-label" for="monthly-input2"><small>Billed annually</small></label>
              </div>
            </div>
            <div class="row justify-content-center gx-0">
              <div class="col-lg-4" v-for="(plan, index) in plans" :key="index">
                <div :class="`pricing_card ${plan.recommended ? 'recommended':''} style-2`">
                  <span class="hint" v-if="plan.recommended">Recommended</span>
                  <div class="icon">
                    <img :src="plan.image" alt="" />
                  </div>
                  <p>{{ plan.title }}</p>
                  <div class="price mb-30">
                    <div class="monthly_price">
                      <span class="h2">
                        <small>$</small> {{ plan.price }}
                      </span>
                      <small class="op-7 ms-1"> / month </small>
                    </div>
                    <div class="yearly_price show">
                      <span class="h2">
                        <small>$</small> {{ plan.price }}
                      </span>
                      <small class="op-7 ms-1"> / year </small>
                    </div>
                  </div>
                  <ul>
                    <li class="border-top py-3 op-8 fw-light text-uppercase" v-for="(feature, i) in plan.features" :key="i">
                      {{ feature }}
                    </li>
                  </ul>
                  <NuxtLink to="/page-contact-5" class="sm-butn btn border text-white radius-9 mt-50 w-100 hover-lightBlue border-lightBlue">
                    <span>Get Started Now</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <p class="text-white text-center mt-50">You have a large team? <Link to="/page-contact-5" class="text-decoration-underline">Contact us</Link> for information about more enterprise options </p>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/pricing/shap_l.png" alt="" class="shap_l" />
    <img src="/assets/img/pricing/shap_r.png" alt="" class="shap_r" />
  </section>
</template>

<script>
import plans from '../../data/IT/plans.json';

export default {
  data() {
    return {
      plans
    }
  },
  methods: {
    togglePlanDuration(e) {
      let duration = e.target.checked ? 'yearly' : 'monthly'
      let monthly = document.querySelectorAll('.monthly_price');
      let yearly = document.querySelectorAll('.yearly_price');

      if (duration === 'monthly') {
        monthly.forEach(price => price.classList.add('show'));
        yearly.forEach(price => price.classList.remove('show'));
      } else {
        yearly.forEach(price => price.classList.add('show'));
        monthly.forEach(price => price.classList.remove('show'));
      }
   }
  }
}
</script>
