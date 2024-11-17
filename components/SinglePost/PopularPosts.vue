<template>
  <section class="popular-posts related Posts section-padding pb-100 bg-gray5">
    <div class="container">
      <h5 class="fw-bold text-uppercase mb-50">{{ rtl ? 'المنشورات ذات الصلة' : 'Related Posts' }}</h5>
      <div class="related-postes-slider position-relative">
        <swiper
          class="swiper-container"
          :dir="rtl ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <swiper-slide v-for="(post, index) in data" :key="index">
            <div class="card border-0 bg-transparent rounded-0 p-0  d-block">
              <NuxtLink to="/page-single-post-5" class="img radius-7 overflow-hidden img-cover">
                <img :src="post.image" class="card-img-top" alt="..." />
              </NuxtLink>
              <div class="card-body px-0">
                <small class="d-block date mt-10 fs-10px fw-bold">
                  <a href="#" :class="`text-uppercase border-end brd-gray pe-3 me-3 color-blue${styleType}`">{{ post.type }}</a>
                  <i class="bi bi-clock me-1"></i>
                  <a href="#" class="op-8">{{ rtl ? 'تم النشر' : 'Posted on' }} {{ post.time }}</a>
                </small>
                <h5 class="fw-bold mt-10 title">
                  <NuxtLink to="/page-single-post-5">{{ post.title }}</NuxtLink>
                </h5>
                <p class="small mt-2 op-8">{{ post.short_desc }}</p>
                <div class="d-flex small mt-20 align-items-center justify-content-between op-9">
                  <div class="l_side d-flex align-items-center">
                    <span class="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                      {{ post.userImgLetter }}
                    </span>
                    <a href="#" class="mt-1">
                      {{ rtl ? 'بواسطة' : 'By' }} {{ post.username }}
                    </a>
                  </div>
                  <div class="r-side mt-1">
                    <i class="bi bi-chat-left-text me-1"></i>
                    <a href="#">{{ post.comments }}</a>
                    <i class="bi bi-eye ms-4 me-1"></i>
                    <a href="#">{{ post.views }}</a>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </section>
</template>

<script>
import posts from '../../data/SinglePost/posts.json';
import postsRTL from '../../data/SinglePost/posts-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  data() {
    return {
      data: this.rtl ? postsRTL : posts,
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 80,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
          nextEl: '.related-postes-slider .swiper-button-next',
          prevEl: '.related-postes-slider .swiper-button-prev'
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 1
          },
          787: {
            slidesPerView: 2
          },
          991: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }
      }
    }
  },
}
</script>
