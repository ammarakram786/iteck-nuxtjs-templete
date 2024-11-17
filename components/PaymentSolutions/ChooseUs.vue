<template>
  <section class="choose-us style-14 section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-head text-center mb-40">
            <p class="color-red1 text-uppercase fw-bold mb-10"> why choose us </p>
            <h2 class="fs-1"> The Faster, Safer Way To Receive Money. </h2>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="(choice, index) in chooseusData" :key="index">
            <div class="choose-card">
              <div class="icon">
                <img :src="choice.icon" alt="" />
              </div>
              <div class="info">
                <h5> {{ choice.title }} </h5>
                <p> {{ choice.details }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chooseusData from '../../data/PaymentSolutions/chooseus.json';

export default {
  data() {
    return {
      chooseusData
    }
  },
}
</script>
