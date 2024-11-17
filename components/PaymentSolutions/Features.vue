<template>
  <section class="features style-14">
    <div class="container">
      <div class="content">
        <div class="section-head text-center mb-70">
          <p class="color-red1 text-uppercase fw-bold mb-10"> features </p>
          <h2 class="fs-1"> Payment Methods </h2>
        </div>
        <ul class="nav nav-pills mb-60 justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation" v-for="(item, index) in features.items" :key="index">
            <button :class="`nav-link ${index === 0 ? 'active' : ''}`" :id="`pills-${item.id}-tab`"
              data-bs-toggle="pill" :data-bs-target="`#pills-${item.target}`" type="button" role="tab"
              aria-controls="pills" :aria-selected="index === 0 ? 'true' : 'false'">
              {{ item.text }}
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div :class="`tab-pane fade ${index === 1 ? 'show active' : ''}`" :id="`pills-${tab.id}`" role="tabpanel"
            :aria-labelledby="`pills-${tab.id}-tab`" v-for="(tab, index) in features.tabs" :key="index">
            <div class="tab-pay-content">
              <div class="row align-items-start">
                <div class="col-lg-5">
                  <div class="info">
                    <div class="icon">
                      <img src="/assets/img/icons/pay1.svg" alt="" />
                    </div>
                    <h3> Use Our <span class="color-red1"> {{ tab.text }} </span> <br /> For Get Paid </h3>
                    <ul>
                      <li v-for="(item, idx) in tab.items" :key="idx"> <i class="fal fa-check me-2 color-red1"></i>
                        <span> {{ item }} </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="img">
                    <img :src="tab.image" alt="" />
                  </div>
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
import features from '../../data/PaymentSolutions/features.json';

export default {
  data() {
    return {
      features
    }
  },
}
</script>
