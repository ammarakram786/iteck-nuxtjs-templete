<template>
  <div>
    <TopNav styleType="4" />
    <Navbar ref="navbarRef" />
    <main class="blog-page style-5 color-4">
      <AllNews styleType="4" :leftSidebar="true" />
      <PopularPosts styleType="4" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav';
import AllNews from '../../components/SinglePost/AllNews';
import PopularPosts from '../../components/SinglePost/PopularPosts';
import Footer from '../../components/App/Footer';

export default {
  name: 'PageSinglePostAppLeftSidebar',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    AllNews,
    PopularPosts,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Single Post App Left Sidebar",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
