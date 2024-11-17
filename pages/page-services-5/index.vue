<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <main class="services-page style-5">
      <Features :isServices="true" />
      <Services />
      <About :noPaddingTop="true" />
      <Testimonials />
      <Pricing />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Features from '../../components/Saas/Features';
import Services from '../../components/Saas/Services';
import About from '../../components/Saas/About';
import Testimonials from '../../components/Saas/Testimonials';
import Pricing from '../../components/Saas/Pricing';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageServices5',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Features,
    Services,
    About,
    Testimonials,
    Pricing,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Services 5",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
