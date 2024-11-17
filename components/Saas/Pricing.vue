<template>
  <section class="pricing section-padding style-5" data-scroll-index="4">
    <div class="container">
      <div class="section-head text-center mb-60 style-5">
        <h2 class="mb-20">{{ rtl ? 'اختر السعر' : 'Choose Plan and' }} <span>{{ rtl ? 'واضغط بدأ' : 'Kick-start' }}</span></h2>
        <p>
          {{ rtl ? 'سواء كنت قد بدأت للتو باختبار سريع أو توسيع نطاق المؤسسة ، فقد قمنا بتغطيتك.' : 'Whether you’re just getting started with rapid testing or scaling across the organization, we’ve got you covered.' }}
        </p>
      </div>
      <div class="pricing-tabsHead text-center">
        <div class="price-radios">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="monthly-input" value="option1" @change="togglePlanDuration('monthly')" />
            <label class="form-check-label" for="monthly-input">
              {{ rtl ? 'تدفع شهريا' : 'Billed Monthly' }}
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="yearly-input" value="option2" checked @change="togglePlanDuration('yearly')" />
            <label class="form-check-label" for="yearly-input">
              {{ rtl ? 'تدفع سنويا' : 'Billed yearly' }}
              <small class="alert-danger text-danger rounded-pill ms-1">-15%</small>
            </label>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <div class="content">
          <div class="price-head">
            <div class="price-headTitle">
              <img src="/assets/img/icons/price_s5.png" alt="" />
            </div>
            <div :class="`price-headItem ${plan.bestChoice && 'bg-gray5'}`" v-for="(plan, i) in data" :key="i">
              <h6>{{ plan.title }}</h6>
              <h2 :class="`monthly_price ${plan.bestChoice && 'color-blue5'}`">{{ plan.price.monthly }} <span>/{{ rtl ? 'شهريا' : 'mo' }}</span></h2>
              <h2 :class="`yearly_price ${plan.bestChoice && 'color-blue5'}`">{{ plan.price.yearly }} <span>/{{ rtl ? 'سنويا' : 'yr' }}</span></h2>
              <small>{{ plan.short_description }}</small>
              <small>{{ plan.description }}</small>
              <div class="label" v-if="plan.bestChoice">{{ rtl ? 'أفضل خيار' : 'best choice' }}</div>
            </div>
          </div>

          <div class="price-body">
            <div class="price-bodyItems" v-for="(feature, i) in features" :key="i">
              <div class="price-bodyTitle">
                {{ feature.title }}
              </div>
              <div class="price-item">
                <span v-if="typeof feature.data[0] === 'boolean'">
                  <i class="bi bi-check2" v-if="feature.data[0]"></i>
                </span>
                <span v-else>{{ feature.data[0] }}</span>
              </div>
              <div class="price-item bg-gray5">
                <span v-if="typeof feature.data[1] === 'boolean'">
                  <i class="bi bi-check2" v-if="feature.data[1]"></i>
                </span>
                <span v-else>{{ feature.data[1] }}</span>
              </div>
              <div class="price-item">
                <span v-if="typeof feature.data[2] === 'boolean'">
                  <i class="bi bi-check2" v-if="feature.data[2]"></i>
                </span>
                <span v-else>{{ feature.data[2] }}</span>
              </div>
            </div>
          </div>

          <div class="price-foot">
            <div class="price-footTitle">
            </div>
            <div class="price-footItem">
              <NuxtLink :to="rtl ? '/rtl-page-contact' : '/page-contact-5'" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
                <span> {{ rtl ? 'نبدأ الآن ' : 'Get Started Now' }} </span>
              </NuxtLink>
            </div>
            <div class="price-footItem bg-gray5">
              <NuxtLink :to="rtl ? '/rtl-page-contact' : '/page-contact-5'" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
                <span> {{ rtl ? 'نبدأ الآن ' : 'Get Started Now' }} </span>
              </NuxtLink>
            </div>
            <div class="price-footItem">
              <NuxtLink :to="rtl ? '/rtl-page-contact' : '/page-contact-5'" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
                <span> {{ rtl ? 'نبدأ الآن ' : 'Get Started Now' }} </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import plans from '../../data/Saas/plans.json';
import plansRTL from '../../data/Saas/plans-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    data() {
      return this.rtl ? plansRTL : plans;
    },
    features() {
      let data = this.rtl ? plansRTL : plans;

      let formattedFeatures = [];

      data[0].features.forEach(feature => formattedFeatures.push({ title: feature.title, data: [] })) ;

      data.forEach((plan, i) => {
        plan.features.forEach((feature, x) => {
          formattedFeatures[x].data[i] = feature.checked !== undefined ? feature.checked : feature.content;
        })
      });

      return formattedFeatures;
    }
  },
  methods: {
    togglePlanDuration(duration) {
      let monthly = document.querySelectorAll('.monthly_price');
      let yearly = document.querySelectorAll('.yearly_price');

      if (duration === 'monthly') {
        monthly.forEach(price => price.classList.add('d-block'));
        monthly.forEach(price => price.classList.remove('d-none'));
        yearly.forEach(price => price.classList.add('d-none'));
        yearly.forEach(price => price.classList.remove('d-block'));
      } else {
        monthly.forEach(price => price.classList.add('d-none'));
        monthly.forEach(price => price.classList.remove('d-block'));
        yearly.forEach(price => price.classList.add('d-block'))
        yearly.forEach(price => price.classList.remove('d-none'));
      }
    }
  }
}
</script>
