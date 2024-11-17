<template>
  <section class="reviews style-2 border-top brd-light section-padding bg-darkBlue" data-scroll-index="5">
    <div class="container">
      <div class="section-head mb-30 text-center">
        <h2 class="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">reviews</h2>
      </div>
      <div class="reviews_slider">
        <swiper class="swiper-container" :options="swiperOptions">
          <swiper-slide v-for="(review, index) in reviews" :key="index">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="reviews_card text-center style-2">
                  <h5 class="text-white lh-4">
                    “{{ review.review }}”
                  </h5>
                  <div class="rev_user">
                    <img :src="review.userImage" alt="" />
                  </div>
                  <div class="rev_stars">
                    <i class="bi bi-star-fill" v-for="(_, i) in Array(review.stars).fill()" :key="i"></i>
                  </div>
                  <small class="text-white mt-2 d-block">
                    <span class="text-uppercase color-lightBlue">{{ review.username }}</span> <span class="op-7">/ {{ review.userPosition }}</span>
                  </small>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="pagination_circle position-relative pagi_white mt-70">
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <img src="/assets/img/review/rev_l.png" alt="" class="rev_l" />
    <img src="/assets/img/review/rev_r.png" alt="" class="rev_r" />
  </section>
</template>

<script>
import reviews from '../../data/IT/reviews.json';

export default {
  data() {
    return {
      reviews,
      swiperOptions: {
        effect: "fade",
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
          el: ".reviews_slider .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: '.reviews_slider .swiper-button-next',
          prevEl: '.reviews_slider .swiper-button-prev'
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

<style>

</style>