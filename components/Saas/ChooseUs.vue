<template>
  <section class="choose-us style-6">
    <div class="container">
      <div class="row justify-content-between gx-0">
        <div class="col-lg-6">
          <div class="img">
            <img src="/assets/img/choose_us/man_arrow.png" alt="" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info">
            <div class="section-head mb-30 style-5">
              <h2>{{ rtl ? '' : 'Our' }} <span>{{ rtl ? 'خدماتنا' : 'Services' }}</span> </h2>
            </div>
            <div class="text mb-50 fs-12px color-666">
              {{ rtl ? 'مع سوق Iteck ، اختر من بين مئات بوابات الدفع لعملائك.' : 'With Iteck Marketplace, choose from hundreds of payment gateways for your customers.' }}
            </div>
            <ul>
              <li :class="`d-flex ${index !== ChooseUsData.length - 1 ?'mb-40':''}`" v-for="(item, index) in ChooseUsData" :key="index">
                <small class="icon-50 me-4 flex-shrink-0">
                  <img :src="item.icon" alt="" />
                </small>
                <div class="inf">
                  <h5>{{ item.info }}</h5>
                  <p class="fs-12px color-666 mt-2">
                    {{ item.details }}
                  </p>
                </div>
              </li>
            </ul>
            <NuxtLink :to='rtl ? "/rtl-page-services" : "/page-services-5"' class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-60 px-5">
              <span>{{ rtl ? 'مشاهدة المزيد' : 'See More' }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/about/about_s6_bubbles.png" alt="" class="bubbles rotate-center" />
  </section>
</template>

<script>
import chooseUsData from '../../data/Saas/choose-us.json';
import chooseUsDataRTL from '../../data/Saas/choose-us-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    ChooseUsData() {
      return this.rtl ? chooseUsDataRTL : chooseUsData;
    }
  }
}
</script>
