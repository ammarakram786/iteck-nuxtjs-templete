<template>
  <div>
    <TopNav styleType="4" />
    <Navbar ref="navbarRef" />
    <main class="shop-page style-5 style-grad">
      <Shop styleType="4" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav';
import Shop from '../../components/Shop';
import Footer from '../../components/App/Footer';

export default {
  name: 'PageShopApp',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Shop,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Shop App",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
