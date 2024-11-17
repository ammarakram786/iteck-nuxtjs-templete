<template>
  <div>
    <Navbar ref="navbarRef" :whiteNotRounded="true" />
    <main class="blog-page style-5">
      <BlogSlider styleType="5" :rtl="true" />
      <PopularPosts styleType="5" :rtl="true" />
      <AllNews styleType="5" :rtl="true" />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/StartupNav/RTLNav';
import BlogSlider from '../../components/Blog/BlogSlider';
import PopularPosts from '../../components/Blog/PopularPosts';
import AllNews from '../../components/Blog/AllNews';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'RTLPageBlog',
  layout: "RTL",
  components: {
    Navbar,
    BlogSlider,
    PopularPosts,
    AllNews,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - المدونة",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
