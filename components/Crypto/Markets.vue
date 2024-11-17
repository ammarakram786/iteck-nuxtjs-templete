<template>
  <section class="markets section-padding style-15">
    <div class="container">
      <div class="section-head text-center mb-70 wow fadeInUp">
        <h6 class="text-uppercase fw-bold lh-8">
          <img src="/assets/img/icons/home_15_icon.png" alt="" class="icon-30 me-2" />
          <span> exchnage </span>
          <img src="/assets/img/icons/home_15_icon.png" alt="" class="icon-30 ms-2" />
        </h6>
        <h2 class="fs-1"> Interested You Today </h2>
      </div>
      <div class="content">
        <div class="markets-table">
          <div class="table-head wow fadeInUp">
            <div class="item">
              <p> Instrument </p>
            </div>
            <div class="item">
              <p> Last Price </p>
            </div>
            <div class="item">
              <p> 24H Change </p>
            </div>
            <div class="item">
              <p> 24H Change </p>
            </div>
          </div>
          <div class="table-body">
            <div class="body-row wow fadeInUp" v-for="(row, idx) in marketsData" :key="idx">
              <div class="item">
                <div class="icon-40 me-3">
                  <img :src="row.paymentIcon" alt="" />
                </div>
                <p class="text-white-50"> <strong class="text-white text-uppercase"> {{ row.from }} </strong> /{{ row.to
                }}
                </p>
              </div>
              <div class="item">
                <p class="text-white-50"> <strong class="text-white me-1"> {{ row.price }} </strong> ${{ row.price }}
                </p>
              </div>
              <div class="item">
                <p :class="row.lastDayChange.operator === '+' ? 'per-up' : 'color-red2'">
                  {{ row.lastDayChange.operator }}{{ row.lastDayChange.change }}% </p>
              </div>
              <div class="item">
                <p class="text-white w-100"> <strong> ${{ row.lastDayPrice.dollar }} </strong> </p>
                <p class="text-white-50 w-100"> <strong> {{ row.lastDayPrice.crypto }} </strong> </p>
              </div>
              <div class="item">
                <img src="/assets/img/icons/line_chart.png" alt="" class="line_chart" />
              </div>
              <div class="item">
                <a href="#" class="trad-btn"> Trade Now </a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center wow fadeInUp">
          <a href="#0" class="btn rounded-pill bg-red2 fw-bold text-white mt-40" target="_blank">
            <span> View More Market <i class="fal fa-long-arrow-right ms-2"></i> </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marketsData from '../../data/Crypto/markets.json';

export default {
  data() {
    return {
      marketsData
    }
  },
}
</script>
