<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <main class="portfolio-page style-1">
      <Projects styleType="5" />
      <Download styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Projects from '../../components/Portfolio/Projects';
import Download from '../../components/Portfolio/Download';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PagePortfolio5',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Projects,
    Download,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Portfolio 5",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
