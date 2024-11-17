<template>
  <div class="col-6 col-lg-3 col-sm-6 card-width">
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
        <template v-if="typeof product.price === 'string'">
          ${{ product.price }}
        </template>
        <template v-else>
          <span class="price-sale">${{ product.price.new }}</span> <span class="old-price">${{ product.price.old }}</span>
        </template>
      </div>

      <a href="#" class="btn rounded-pill mt-20">
        <span>{{ rtl ? 'أضف إلى السلة' : 'Add To Cart' }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'product']
}
</script>
