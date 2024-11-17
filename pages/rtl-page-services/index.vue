<template>
  <div>
    <Navbar ref="navbarRef" :whiteNotRounded="true" />
    <main class="services-page style-5">
      <Features :rtl="true" :isServices="true" />
      <Services :rtl="true" />
      <About :rtl="true" :noPaddingTop="true" />
      <Testimonials :rtl="true" />
      <Pricing :rtl="true" />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/StartupNav/RTLNav';
import Features from '../../components/Saas/Features';
import Services from '../../components/Saas/Services';
import About from '../../components/Saas/About';
import Testimonials from '../../components/Saas/Testimonials';
import Pricing from '../../components/Saas/Pricing';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'RTLPageServices',
  layout: "RTL",
  components: {
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
      titleTemplate: "%s - الخدمات",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
