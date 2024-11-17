<template>
  <div>
    <TopNav styleType="4" :rtl="true" />
    <Navbar ref="navbarRef" :rtl="true" />
    <Header :rtl="true" />
    <main>
      <Clients :rtl="true" />
      <Features :rtl="true" />
      <About :rtl="true" />
      <Screenshots :rtl="true" />
      <Testimonials :rtl="true" />
      <Pricing :rtl="true" />
      <FAQ :rtl="true" />
      <Community :rtl="true" />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav/OnePageNav';
import Header from '../../components/App/Header';
import Clients from '../../components/App/Clients';
import Features from '../../components/App/Features';
import About from '../../components/App/About';
import Screenshots from '../../components/App/Screenshots';
import Testimonials from '../../components/App/Testimonials';
import Pricing from '../../components/App/Pricing';
import FAQ from '../../components/App/FAQ';
import Community from '../../components/App/Community';
import Footer from '../../components/App/Footer';

export default {
  name: 'RTLHomeAppLandingOnePage',
  layout: "RTL",
  components: {
    TopNav,
    Navbar,
    Header,
    Clients,
    Features,
    About,
    Screenshots,
    Testimonials,
    Pricing,
    FAQ,
    Community,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - تطبيق الهبوط صفحة واحدة",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
