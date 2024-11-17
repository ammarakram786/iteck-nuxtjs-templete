<template>
  <div class="content">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 order-2 order-lg-0">
          <div class="section-head mb-30 style-5">
            <h2>{{ rtl ? 'تجارب المستخدم ' : 'Optimized User' }} <span>{{ rtl ? 'المحسّنة' : 'Experiences' }}</span> </h2>
          </div>
          <p>{{ rtl ? 'يمكن تبسيط عمليات التحميل والتحديث التي يقوم بها الموردون من خلال لوحات المعلومات الأمامية التي توفر سهولة الوصول بشكل أفضل.' : 'The uploading and updating processes made by suppliers can be streamlined through front-end dashboards that create better ease of access.' }}</p>
          <div class="line-links">
            <a href="#" v-for="(link, index) in links" :key="index">{{ link }}</a>
          </div>
        </div>
        <div class="col-lg-8 order-0 order-lg-2">
          <div class="img main-img1">
            <img src="/assets/img/about/about_s5_1_1.png" alt="" class="sm-circle" />
            <img src="/assets/img/about/about_s5_1_2.png" alt="" class="img-body" />
            <img src="/assets/img/about/about_s5_1_3.png" alt="" class="card1" />
            <img src="/assets/img/about/about_s5_1_4.png" alt="" class="card2" />
            <img src="/assets/img/about/about_s5_1_5.png" alt="" class="lg-circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'links']
}
</script>
