<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <Header page="About Us" title="About Our Company" />
    <main class="about-page style-2">
      <About />
      <Timeline />
      <Clients />
      <Blog />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Header from '../../components/Style2/Header';
import About from '../../components/Style2/About/About';
import Timeline from '../../components/Style2/About/Timeline';
import Clients from '../../components/Style2/About/Clients';
import Blog from '../../components/Style2/About/Blog';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageAbout2',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Header,
    About,
    Timeline,
    Clients,
    Blog,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page About 2",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
