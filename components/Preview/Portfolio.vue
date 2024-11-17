<template>
  <section class="portfolio-blocks section-padding bg-gray">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="sec-head text-center mb-80">
            <h3 class="num"><span class="gr">100<span class="thin">+</span></span></h3>
            <h2>Vue (nuxt js) Templates and unlimited layouts, pages, styles, headers, and footers.</h2>
          </div>
        </div>
        <div class="col-12">
          <div class="main-marq">
            <div class="slide-har st1">
              <div class="box">
                <div class="item" v-for="(item, i) in portfolioData.st1" :key="i">
                  <img :src="item" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="item" v-for="(item, i) in portfolioData.st1" :key="i">
                  <img :src="item" alt="" />
                </div>
              </div>
            </div>
            <div class="slide-har st2">
              <div class="box">
                <div class="item" v-for="(item, i) in portfolioData.st2" :key="i">
                  <img :src="item" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="item" v-for="(item, i) in portfolioData.st2" :key="i">
                  <img :src="item" alt="" />
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
import portfolioData from '../../data/Preview/portfolio.json';

export default {
  data() {
    return {
      portfolioData
    }
  },
}
</script>
