<template>
  <section :class="`download section-padding style-5 ${styleType ==='4' ? 'bg-light':''}`">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="content text-center">
            <div :class="`section-head text-center ${styleType === '4' ? 'style-4':''}`">
              <h2 class="mb-20"> {{ rtl ? 'قم بالوصول إلى إمكانات عملك اليوم وابحث عن فرصة لتحقيق' : 'Access your business potentials today & find opportunity for ' }} 
                <span>
                  {{ rtl ? 'نجاح أكبر' : 'bigger success' }}
                  <template v-if="styleType === '5'">
                    <img src="/assets/img/header/head5_line.png" alt="" class="head-line" />
                    <img src="/assets/img/header/head5_pen.png" alt="" class="head-pen" />
                  </template>
                </span> 
              </h2>
            </div>
            <div class="butns mt-70">
              <NuxtLink :to='rtl ? "/rtl-page-contact" : "/page-contact-app"' :class="`btn rounded-pill me-4 fw-bold ${styleType === '4' ? 'bg-blue4 text-white' : 'blue5-3Dbutn hover-blue2 sm-butn mx-1'}`" target="_blank">
                <small>{{ rtl ? 'ابدأ مشروعاً الان' : 'Start A Project Now' }}</small>
              </NuxtLink>
              <NuxtLink :to='rtl ? "/rtl-page-about" : "/page-about-app"' :class="`btn rounded-pill fw-bold ${styleType === '4' ? 'hover-blue4 border-blue4' : 'blue5-3Dbutn hover-blue2 sm-butn mx-1'}`" target="_blank">
                <small>{{ rtl ? 'انظر التسعير و الخطة' : 'See Pricing & Plan' }}</small>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/contact_globe.svg" alt="" class="contact_globe" />
  </section>
</template>

<script>
export default {
  props: ['rtl', 'styleType']
}
</script>
