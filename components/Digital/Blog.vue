<template>
  <section class="blog section-padding bg-gray style-1" data-scroll-index="6">
    <div class="container">
      <div class="row">
        <div class="col offset-lg-1">
          <div class="section-head mb-60">
            <h6 class="color-main text-uppercase wow fadeInUp">our press</h6>
            <h2 class="wow fadeInUp">
              Latest Posts <span class="fw-normal">From Our Press</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="blog_slider">
          <swiper class="swiper-container" :options="swiperOptions">
            <swiper-slide v-for="(blog, index) in blogs" :key="index">
              <div class="blog_box" @mousemove="showDetails" @mouseleave="hideDetails">
                <div class="tags">
                  <a href="#">{{ blog.type }}</a>
                </div>
                <div class="img">
                  <img :src="blog.cover" alt="" />
                </div>
                <div class="info">
                  <h6>
                    <NuxtLink to="/page-single-post-5">{{ blog.title }}</NuxtLink>
                  </h6>
                  <div class="auther">
                    <span>
                      <img class="auther-img" :src="blog.userPic" alt="" />
                      <small><a href="#">By {{ blog.user }}</a></small>
                    </span>
                    <span>
                      <i class="bi bi-calendar2"></i>
                      <small><a href="#">{{ blog.date }}</a></small>
                    </span>
                  </div>
                  <div class="text">
                    {{ blog.details }} [...]
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogs from '../../data/Digital/blog.json';

export default {
  data() {
    return {
      blogs,
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
          el: ".blog_slider .swiper-pagination"
        },
        navigation: {
          nextEl: '.blog_slider .swiper-button-next',
          prevEl: '.blog_slider .swiper-button-prev'
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 2
          },
          787: {
            slidesPerView: 2
          },
          991: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }
      }
    }
  },
  methods: {
    showDetails(event) {
      const detailsEl = event.currentTarget.querySelector('.text');
      detailsEl.style.display = "block";
    },
    hideDetails(event) {
      const detailsEl = event.currentTarget.querySelector('.text');
      detailsEl.style.display = "none";
    }
  },
}
</script>
