<template>
  <section :class="`about ${noPaddingTop ? 'pt-0 pb-150':'section-padding'} style-5`" data-scroll-index="1">
    <Content1 :links="data.lineLinks" :rtl="rtl" />
    <Content2 :list="data.list" :rtl="rtl" />
    <Content3 :texts="data.texts" :rtl="rtl" :number="data.number" />
  </section>
</template>

<script>
import aboutData from '../../../data/Saas/about.json';
import aboutDataRTL from '../../../data/Saas/about-rtl.json';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

export default {
  props: ['rtl', 'noPaddingTop'],
  components: {
    Content1,
    Content2,
    Content3
  },
  computed: {
    data() {
      return this.rtl ? aboutDataRTL : aboutData;
    },
  }
}
</script>
