<template>
  <section class="related-products section-padding">
    <div class="container">
      <div class="text-center title">
        <h3>{{ rtl ? 'منتجات مشابهة' : 'Related Products' }}</h3>
      </div>
      <div class="related-products-slider position-relative">
        <swiper class="swiper-container" :options="swiperOptions">
          <swiper-slide v-for="(product, index) in data" :key="index">
            <div class="product-card">
              <div class="img">
                <img :src="product.image" alt="" />
                <span v-if="product.label" :class="`label ${product.label==='new'?'new':'sale-off'}`">{{ product.label }}</span>
                <span :class="`fav-btn ${product.liked?'active':''}`"> <i class="fas fa-heart"></i> </span>
              </div>
              <div class="info">
                <h6 class="category">{{ product.category }}</h6>
                <h5 class="title">{{ product.title }}</h5>
                <div class="rate">
                  <div class="stars">
                  <i v-for="(_, index) in Array(5).fill(0)" :key="index" :class="`fas fa-star ${index + 1 <= product.rating ? 'active':''}`"></i>
                  </div>
                  <span class="rev ms-1">{{ product.reviews }} {{ rtl ? 'المراجعات' : 'Reviews' }}</span>
                </div>
              </div>
              <div class="price">
                <template v-if="typeof product.price === 'string'">${{product.price}}</template>
                <template v-else>
                  <span class="price-sale">${{ product.price.new }}</span> <span class="old-price">${{ product.price.old }}</span>
                </template>
              </div>
              <a href="#" :class="`btn rounded-pill bg-blue${styleType} fw-bold text-white mt-20`" target="_blank">
                <span> {{ rtl ? 'اضف إلى السلة' : 'Add To Cart' }} </span>
              </a>
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
import relatedProducts from '../../data/App/related-products.json';
import relatedProductsRTL from '../../data/App/related-products-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  data() {
    return {
      data: this.rtl ? relatedProductsRTL : relatedProducts,
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 24,
        speed: 1000,
        pagination: false,
        navigation: {
          nextEl: '.related-products-slider .swiper-button-next',
          prevEl: '.related-products-slider .swiper-button-prev'
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
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 5
          }
        }
      }
    }
  },
}
</script>
