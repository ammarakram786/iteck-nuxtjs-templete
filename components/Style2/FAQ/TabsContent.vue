<template>
  <div class="tab-content" id="pills-tabContent">
    <Content id="faq1" :isActive="true" />
    <Content id="faq2" />
  </div>
</template>

<script>
import Content from './Content';

export default {
  components: {
    Content
  }
}
</script>
