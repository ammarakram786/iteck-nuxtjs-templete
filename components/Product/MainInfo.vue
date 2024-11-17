<template>
  <div>
    <h6 class="category">{{ mainInfo.category }}</h6>
      <h5 class="title">{{ mainInfo.title }}</h5>
      <div class="rate">
        <div class="stars">
          <i v-for="(_, index) in Array(5).fill(0)" :key="index" :class="`fas fa-star ${index + 1 <= mainInfo.rating ? 'active' : ''}`"></i>
        </div>
        <span class="rev ms-1">{{ mainInfo.reviews }} {{ rtl ? 'المراجعات' : 'Reviews' }}</span>
      </div>
      <div class="price">
        ${{ mainInfo.price }}
      </div>
      <div class="info-text">
        {{ mainInfo.discription }}
      </div>
      <ul class="info-list">
        <li class="d-flex align-items-center" v-for="(feature, i) in mainInfo.features" :key="i">
          <i class="bi bi-dash me-1"></i>
          {{ feature }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'mainInfo']
}
</script>
