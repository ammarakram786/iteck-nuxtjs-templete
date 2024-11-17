<template>
  <div>
    <TopNav styleType="4" />
    <Navbar ref="navbarRef" />
    <main class="blog-page style-5 color-4">
      <BlogSlider styleType="4" />
      <PopularPosts styleType="4" />
      <AllNews :isWide="true" styleType="4" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav';
import BlogSlider from '../../components/Blog/BlogSlider';
import PopularPosts from '../../components/Blog/PopularPosts';
import AllNews from '../../components/Blog/AllNews';
import Footer from '../../components/App/Footer';

export default {
  name: 'PageBlogAppWide',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    BlogSlider,
    PopularPosts,
    AllNews,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Blog App Wide",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
