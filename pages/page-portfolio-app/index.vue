<template>
  <div>
    <TopNav styleType="4" />
    <Navbar ref="navbarRef" />
    <main class="portfolio-page style-1">
      <Projects styleType="4" />
      <Download styleType="4" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav';
import Projects from '../../components/Portfolio/Projects';
import Download from '../../components/Portfolio/Download';
import Footer from '../../components/App/Footer';

export default {
  name: 'PagePortfolioApp',
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
      titleTemplate: "%s - Page Portfolio App",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
