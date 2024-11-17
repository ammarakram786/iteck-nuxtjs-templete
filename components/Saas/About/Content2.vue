<template>
  <div class="content">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="img main-img2">
            <img src="/assets/img/about/about_s5_2_1.png" alt="" />
            <img src="/assets/img/about/about_s5_2_2.png" alt="" class="img-body" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="section-head mb-30 style-5">
            <h2>{{ rtl ? 'أكثر من 100' : '100+ Payment' }} <span>{{ rtl ? 'بوابة دفع' : 'Gateways' }}</span> </h2>
          </div>
          <p>
            {{ rtl ? 'مع سوق Iteck ، اختر من بين مئات بوابات الدفع لعملائك. من PayPal إلى Stripe إلى Skrill ، Visa Debit ، Master Card ، إلخ' : 'With Iteck Marketplace, choose from hundreds of payment gateways for your customers. From PayPal to Stripe to Skrill, Visa Debit, Master Card, etc' }}
          </p>
          <ul class="list-icon">
            <li v-for="(item, index) in list" :key="index">
              <span class="icon">
                <i :class="item.icon"></i>
              </span>
              <h6>{{ item.title }}</h6>
            </li>
          </ul>
          <NuxtLink to="/page-contact-5" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-50">
            <span>{{ rtl ? 'احجز عرضًا تجريبيًا مجانيًا ' : 'Book A Free Demo' }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'list']
}
</script>
