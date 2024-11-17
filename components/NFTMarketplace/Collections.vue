<template>
  <section class="collections section-padding style-12">
    <div class="container">
      <div class="row align-items-center mb-70">
        <div class="col-lg-7">
          <div class="section-head style-12">
            <h6 class="mb-3">
              <img src="/assets/img/icons/star2.png" alt="" class="icon" />
              <span class="mx-2"> collections </span>
            </h6>
            <h2> Top <span> Collection </span> </h2>
          </div>
        </div>
        <div class="col-lg-5 text-lg-end">
          <a href="#" class="butn bg-yellowGreen rounded-3 hover-shadow">
            <span class="text-dark">
              <img class="icon-20 me-1" src="/assets/img/icons/star3.png" alt="" />
              All Collector
            </span>
          </a>
        </div>
      </div>
      <div class="content">
        <div class="collections-slider12">
          <swiper class="overflow-visible" :options="swiperOptions">
            <swiper-slide v-for="(collection, index) in collectionsData" :key="index">
              <div class="collection-card">
                <div class="top-info">
                  <h6> {{ collection.name }} </h6>
                  <p> <img src="/assets/img/icons/star2.png" alt="" /> <span class="text-white"> {{ collection.items }}
                    </span> <span> Items </span> </p>
                </div>
                <div class="auther-img">
                  <img :src="collection.pic" alt="" />
                </div>
                <div class="imgs">
                  <div class="main-img img-cover">
                    <img :src="collection.image" alt="" />
                  </div>
                  <div class="sub-imgs">
                    <img :src="img" alt="" v-for="(img, idx) in collection.subImages" :key="idx" />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import collectionsData from '../../data/NFTMarketplace/collections.json';

export default {
  data() {
    return {
      collectionsData,
      swiperOptions: {
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
          delay: 5000
        },
        loop: false,
        pagination: false,
        navigation: false,
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
            slidesPerView: 3
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
