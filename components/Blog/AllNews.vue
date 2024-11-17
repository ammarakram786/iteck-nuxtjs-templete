<template>
  <section class="all-news section-padding blog bg-transparent style-3">
    <div class="container">
      <div :class="`row ${isWide ? 'justify-content-center': leftSidebar ? 'gx-5':'gx-4 gx-lg-5'}`">
        <BlogSidebar v-if="!isWide && leftSidebar" :sidebarData="allNewsData.sidebar" :styleType="styleType" :rtl="rtl" />
        <Blogs :blogs="allNewsData.blogs" :isWide="isWide" :styleType="styleType" :rtl="rtl" />
        <BlogSidebar v-if="!isWide && !leftSidebar" :sidebarData="allNewsData.sidebar" :styleType="styleType" :rtl="rtl" />
      </div>
    </div>
  </section>
</template>

<script>
import Blogs from './Blogs';
import BlogSidebar from './BlogSidebar';

import allNewsData from '../../data/Blog/all-news.json';
import allNewsDataRTL from '../../data/Blog/all-news-rtl.json';

export default {
  props: ['rtl', 'isWide', 'leftSidebar', 'styleType'],
  components: {
    Blogs,
    BlogSidebar
  },
  computed: {
    allNewsData() {
      return this.rtl ? allNewsDataRTL : allNewsData;
    }
  }
}
</script>
