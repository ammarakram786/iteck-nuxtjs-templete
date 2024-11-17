<template>
  <section class="blog section-padding style-6" data-scroll-index="8">
    <div class="container">
      <div class="section-head mb-70 style-6 text-center" v-if="rtl">
        <h2 class="mb-20"> أحدث الأخبار من <span><small>مجلتنا</small></span></h2>
        <p class="color-666">احصل على أحدث المقالات من صحافتنا ، ناقش وشارك</p>
      </div>
      <div class="section-head mb-70 style-6 text-center" v-else>
        <h2 class="mb-20"> Latest from our <span class="ms-1"><small> magazine </small></span></h2>
        <p class="color-666">Get the latest articles from our press, discuss & share</p>
      </div>
      <div class="content">
        <BlogCard v-for="(blog, index) in blogsData" :key="index" :blog="blog" :isCenter="index === 1" :rtl="rtl" />
      </div>
    </div>
  </section>
</template>

<script>
import blogs from '../../data/Startup/blog.json';
import blogsRTL from '../../data/Startup/blog-rtl.json';
import BlogCard from './BlogCard';

export default {
  props: ['rtl'],
  computed: {
    blogsData() {
      return this.rtl ? blogsRTL : blogs;
    }
  },
  components: {
    BlogCard
  }
}
</script>
