<template>
  <div class="qyt-addCart">
    <span class="me-4 mb-1 color-000 fw-bold fs-14px">{{ rtl ? 'الكمية' : 'QTY' }}</span>
    <div class="add-more">
      <span class="qt-minus" @click="decrease"><i class="fas fa-minus"></i></span>
      <span class="qt">{{ counter }}</span>
      <span class="qt-plus" @click="increase"><i class="fas fa-plus"></i></span>
    </div>
    <a href="#" :class="`btn rounded-pill bg-blue${styleType} fw-bold text-white`" target="_blank">
      <small> {{ rtl ? 'أضف إلى السلة' : 'Add To Cart' }} </small>
    </a>
    <div class="fav-btn">
      <i class="fas fa-heart"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'styleType'],
  data() {
    return {
      counter: 1
    }
  },
  methods: {
    increase() {
      this.counter += 1;
    },
    decrease() {
      if (this.counter !== 1) {
        this.counter -= 1;
      }
    }
  },
}
</script>
