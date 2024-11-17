<template>
  <div>
    <Navbar ref="navbarRef" :whiteNotRounded="true" />
    <main class="blog-page style-5">
      <AllNews styleType="5" :rtl="true" />
      <PopularPosts styleType="5" :rtl="true" />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/StartupNav/RTLNav';
import AllNews from '../../components/SinglePost/AllNews';
import PopularPosts from '../../components/SinglePost/PopularPosts';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'RTLPageSinglePost',
  layout: "RTL",
  components: {
    Navbar,
    AllNews,
    PopularPosts,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - تفاصيل الخبر",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
