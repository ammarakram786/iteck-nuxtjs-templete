<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="blog-page style-5 color-5">
      <AllNews styleType="5" :isWide="true" />
      <PopularPosts styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import AllNews from '../../components/SinglePost/AllNews';
import PopularPosts from '../../components/SinglePost/PopularPosts';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageSinglePost5Wide',
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
      titleTemplate: "%s - Single Post 5 Wide",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
