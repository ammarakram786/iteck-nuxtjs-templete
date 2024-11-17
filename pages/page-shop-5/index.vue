<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <main class="shop-page style-5">
      <Shop styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Shop from '../../components/Shop';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageShop5',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Shop,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Shop 5",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
