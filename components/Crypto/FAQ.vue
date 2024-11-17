<template>
  <section class="faq pt-100 style-15">
    <div class="container">
      <div class="section-head text-center mb-50 wow fadeInUp">
        <h6 class="text-uppercase fw-bold lh-8">
          <img src="/assets/img/icons/home_15_icon.png" alt="" class="icon-30 me-2" />
          <span> some faq </span>
          <img src="/assets/img/icons/home_15_icon.png" alt="" class="icon-30 ms-2" />
        </h6>
        <h2 class="fs-1"> Freequently Asked Anything </h2>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-6" v-for="(question, idx) in FAQs" :key="idx">
            <div class="faq-card wow fadeInUp">
              <span class="numb">
                {{ question.numb }}
              </span>
              <div class="info">
                <h6> {{ question.question }} </h6>
                <p> {{ question.answer }} </p>
              </div>
              <img src="/assets/img/icons/faq_15_icon.png" alt="" class="icon" />
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-50 wow fadeInUp">
        <a href="#" class="butn border-1 brd-light border rounded-pill text-white hover-red2">
          <span> Ask More Question <i class="fal fa-long-arrow-right ms-2"></i> </span>
        </a>
      </div>
      <div class="subscribe-content mt-100 wow fadeInUp">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="subscribe-card">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <div class="icon">
                    <img src="/assets/img/icons/ch10.png" alt="" />
                  </div>
                </div>
                <h2 class="fs-1s"> Daily Update & Newsletter </h2>
                <div class="form-group">
                  <span class="ico"> <i class="fas fa-envelope-open"></i> </span>
                  <input type="text" placeholder="Business Email" />
                  <button> Subscribe Now </button>
                  <img src="/assets/img/subs_arrow.png" alt="" class="subs_arrow" />
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
import FAQs from '../../data/Crypto/faq.json';

export default {
  data() {
    return {
      FAQs
    }
  },
}
</script>
