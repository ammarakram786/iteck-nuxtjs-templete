<template>
  <div class="content pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 order-2 order-lg-0">
          <div class="section-head mb-30 style-5">
            <h2>{{ rtl ? 'سهل' : 'Easy To' }} <span>{{ rtl ? 'التخصيص' : 'Customizable' }}</span> </h2>
          </div>
          <p>
            {{ texts.text1 }}
          </p>
          <p class="mt-20">
            {{ texts.text2 }}
          </p>
          <div class="d-flex align-items-center mt-70">
            <div class="img me-2 flex-shrink-0">
              <img src="/assets/img/about/owners.png" alt="" />
            </div>
            <div class="inf">
              <h4 class="color-blue5 mb-0 lh-1">{{ number }}</h4>
              <p>{{ rtl ? 'أصحاب السوق يثقون بنا' : 'Marketplace Owners Trust Us' }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-8 order-0 order-lg-2">
          <div class="img main-img3">
            <img src="/assets/img/about/about_s5_3_1.png" alt="" class="img-body" />
            <img src="/assets/img/about/about_s5_3_2.png" alt="" />
            <img src="/assets/img/about/about_s5_3_3.png" alt="" />
            <img src="/assets/img/about/about_s5_3_4.png" alt="" />
            <img src="/assets/img/about/about_s5_3_5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'texts', 'number']
}
</script>
