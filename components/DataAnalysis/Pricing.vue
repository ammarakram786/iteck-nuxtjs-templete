<template>
  <section class="pricing style-8 bg-gray2">
      <div class="pricing-head wow fadeInUp">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="section-head style-8">
                <h6> our plans </h6>
                <h3 class="text-white"> Minimalist Plans </h3>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="position-relative"> 
                <client-only>
                  <range-slider
                    class="slider"
                    min="0"
                    max="100"
                    step="1"
                    v-model="range"
                  />
                </client-only>
                <p class="users-number"> <input type="text" id="amount" :value="range" readonly /> <span> users </span>  </p>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="pricing-tabsHead text-center">
                <div class="price-radios">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="monthly-input"
                      value="option1" />
                    <label class="form-check-label" for="monthly-input">
                      Monthly
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="yearly-input"
                      value="option2" checked />
                    <label class="form-check-label" for="yearly-input">
                      yearly
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pricing-body">
        <div class="container">
          <div class="content">
            <div class="row">
              <div :class="`col-lg-4 ${plan.head ? '' : 'pt-60'} order-0 order-lg-0 wow fadeInUp`" :data-wow-delay="`${index * 0.2}s`" v-for="(plan, index) in plans" :key="index">
                <div class="popular-head" v-if="plan.head">
                  <p> {{ plan.head }} </p>
                </div>
                <div class="pricing-card">
                  <div class="pricing-title">
                    <h2> {{ plan.title }} </h2>
                    <p> {{ plan.description }} </p>
                  </div>
                  <div class="price">
                    <p> Price: ${{ plan.price }} </p>
                    <a href="#" class="price-btn"> Purchase Now <i class="fal fa-long-arrow-right"></i> </a>
                  </div>
                  <div class="pricing-info">
                    <ul>
                      <li v-for="(feature, i) in plan.features" :key="i">
                        <span class="icon">
                          <img src="/assets/img/icons/numbers/8.png" alt="" />
                        </span>
                        <span> {{ feature }} </span>
                      </li>
                    </ul>
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
import plans from '../../data/DataAnalysis/plans.json';
import RangeSlider from 'vue-range-slider';
import 'vue-range-slider/dist/vue-range-slider.css';

export default {
  data() {
    return {
      range: 20,
      plans
    }
  },
  components: {
    RangeSlider
  },
  methods: {
    changeRangeValue(value) {
      this.range = value;
    }
  }
}
</script>
