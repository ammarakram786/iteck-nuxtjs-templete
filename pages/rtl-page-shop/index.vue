<template>
  <div>
    <Navbar ref="navbarRef" :whiteNotRounded="true" />
    <main class="shop-page style-5">
      <Shop styleType="5" :rtl="true" />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/StartupNav/RTLNav';
import Shop from '../../components/Shop';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'RTLPageShop',
  layout: "RTL",
  components: {
    Navbar,
    Shop,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - المتجر",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
