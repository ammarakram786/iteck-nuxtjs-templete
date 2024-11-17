<template>
  <div class="more-info pt-20 mt-1 border-1 border-top brd-gray">
    <p class="text-uppercase fs-14px color-666 mb-1"> <strong class="color-000">{{ rtl ? 'الموديل' : 'SKU' }}:</strong> {{ moreInfo.SKU }}</p>
    <p class="fs-14px color-666 mb-1"><strong class="color-000">{{ rtl ? 'التصنيف' : 'Category' }}:</strong> {{ moreInfo.Category }}</p>
    <p class="fs-14px color-666 mb-1">
      <strong class="color-000">{{ rtl ? 'الكلمات الدلالية' : 'Tags' }}:</strong> 
      <a href="#" class="me-1" v-for="(tag, index) in moreInfo.tags" :key="index">{{ tag }}, </a>
    </p>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'moreInfo']
}
</script>
