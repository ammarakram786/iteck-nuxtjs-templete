<template>
  <div class="section-head text-center mb-80 style-5">
    <div class="page-links color-999">
      <a href="#" class="me-2">
        {{ rtl ? 'الرئيسية' : 'Home' }}
      </a>
      <span class="me-2">/</span>
      <a href="#" class="me-2">
        {{ rtl ? 'متجر اى تيك' : 'Iteck’s Store' }}
      </a>
      <span class="me-2">/</span>
      <a href="#" class="color-000">
        {{ productName }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'productName']
}
</script>
