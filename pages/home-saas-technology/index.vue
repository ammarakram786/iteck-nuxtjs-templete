<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <Header />
    <main>
      <Community />
      <About />
      <Clients />
      <Features />
      <Pricing />
      <Testimonials />
      <Download />
    </main>
    <Footer />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Header from '../../components/Saas/Header';
import Community from '../../components/Saas/Community';
import About from '../../components/Saas/About';
import Clients from '../../components/Saas/Clients';
import Features from '../../components/Saas/Features';
import Pricing from '../../components/Saas/Pricing';
import Testimonials from '../../components/Saas/Testimonials';
import Download from '../../components/Saas/Download';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'HomeSaasTechnology',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Header,
    Community,
    About,
    Clients,
    Features,
    Pricing,
    Testimonials,
    Download,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Saas Technology",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
