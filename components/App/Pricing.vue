<template>
  <section class="pricing section-padding style-4 pb-50" data-scroll-index="6">
    <div class="container">
      <div class="section-head text-center style-4">
        <small class="title_small">{{ rtl ? 'خطة الاسعار' : 'Pricing Plan' }}</small>
        <h2 class="mb-30">{{ rtl ? 'ابدأ بـ' : 'Start With' }} <span> {{ rtl ? 'سعر مناسب' : 'Affordable Price' }} </span> </h2>
      </div>
      <div class="content">
        <div class="toggle_switch d-flex align-items-center justify-content-center mb-40">
          <div class="form-check form-switch p-0">
            <label class="form-check-label" for="flexSwitchCheckDefault"><small>{{ rtl ? 'تدفع شهريا' : 'Billed monthly' }}</small></label>
            <input class="form-check-input float-none bg-blue4" type="checkbox" id="flexSwitchCheckDefault" checked />
            <label class="form-check-label" for="flexSwitchCheckDefault"><small>{{ rtl ? 'دفع سنوى' : 'Billed annually' }}</small></label>
          </div>
        </div>
        <div class="row gx-0">
          <div class="col-lg-6" v-for="(plan, index) in data" :key="index">
            <div class="price-card">
              <div class="price-header pb-4">
                <h6> <img :src="plan.image" alt="" class="icon" /> {{ plan.title }} </h6>
                <h2>{{ plan.price }} <small> / {{ rtl ? 'شهري' : 'month' }}</small></h2>
                <p>{{ plan.description }}</p>
              </div>
              <div class="price-body py-4">
                <ul>
                  <li :class="`d-flex align-items-center mb-3 ${feature.active ? '':' op-3'}`" v-for="(feature, i) in plan.features" :key="i">
                    <small class="icon-30 bg-blue4 rounded-circle text-white d-inline-flex align-items-center justify-content-center me-3 flex-shrink-0">
                      <i :class="feature.icon"></i>
                    </small>
                    <p class="fw-bold">{{ feature.title }}</p>
                  </li>
                </ul>
                <NuxtLink to="/page-contact-5" :class="`btn rounded-pill ${index === 0 ? 'border-blue4':'bg-blue4'} hover-blue4 fw-bold mt-50 px-5 ${index === 0 ?  'border-blue4':'text-white'}`">
                    <small>{{ rtl ? 'سجل الان' : 'Register Now' }}</small>
                </NuxtLink>
              </div>
              <div class="off" v-if="plan.off">
                <span>
                  {{ plan.off }} <br /> {{ rtl ? 'خصم' : 'off' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import plans from '../../data/App/plans.json';
import plansRTL from '../../data/App/plans-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    data() {
      return this.rtl ? plansRTL : plans;
    }
  }
}
</script>
