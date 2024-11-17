<template>
  <div>
    <Navbar ref="navbarRef" :whiteNotRounded="true" />
    <main class="portfolio-page style-1">
      <Projects styleType="5" :rtl="true" />
      <Download styleType="5" :rtl="true" />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/StartupNav/RTLNav';
import Projects from '../../components/Portfolio/Projects';
import Download from '../../components/Portfolio/Download';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'RTLPagePortfolio',
  layout: "RTL",
  components: {
    Navbar,
    Projects,
    Download,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - المشاريع",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
