<template>
  <div>
    <TopNav styleType="4" />
    <Navbar ref="navbarRef" />
    <main class="services-page style-5">
      <Services />
      <About :noFirstContent="true" :noIntegration="true" :noWave="true" />
      <Testimonials />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav';
import Services from '../../components/App/Services';
import About from '../../components/App/About';
import Testimonials from '../../components/App/Testimonials';
import Footer from '../../components/App/Footer';

export default {
  name: 'PageServicesApp',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Services,
    About,
    Testimonials,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Services App",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
