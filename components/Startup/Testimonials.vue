<template>
  <div class="testimonials style-6" data-scroll-index="5">
    <div class="container">
      <div class="row gx-0 align-items-center justify-content-between">
        <div class="col-lg-4">
          <div class="testi-slider style-6 slider-style-6">
            <div class="icon mb-50">
              <i class="fas fa-quote-right"></i>
            </div>
            <swiper class="swiper-container" :options="swiperOptions">
              <swiper-slide>
                <div class="testi-card">
                  <div class="text">
                    {{
                      rtl ? 
                        "لا أعرف ماذا أقول غير ذلك ، هذا شيء لم تره من قبل. تصميم فريد وخفيف الوزن ودعم متميز. من دواعي سروري دائما Itekseo العمل!"
                        :
                        "I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support. Itekseo always a pleasure to work!"
                    }}
                  </div>
                  <div class="author mt-30">
                    <template v-if="rtl">
                      <span class="color-000 fw-bold text-capitalize">كونور مارتينيلى</span>
                      <p class="fs-10px">مدير في  <a href="#" class="text-decoration-underline color-blue6">فندق ومنتجع ايكولاند </a> </p>
                    </template>
                    <template v-else>
                      <span class="color-000 fw-bold text-capitalize">Conor Martinelli</span>
                      <p class="fs-10px">Director at  <a href="#" class="text-decoration-underline color-blue6"> Ecoland Resort & Hotel</a> </p>
                    </template>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="img">
            <img src="/assets/img/testimonials/users_6.png" alt="" class="" />
            <img src="/assets/img/testimonials/bubbls.png" alt="" class="bubbls rotate-center" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl'],
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
          nextEl: '.testi-slider.style-6 .swiper-button-next',
          prevEl: '.testi-slider.style-6 .swiper-button-prev'
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        loop: true
      }
    }
  },
}
</script>
