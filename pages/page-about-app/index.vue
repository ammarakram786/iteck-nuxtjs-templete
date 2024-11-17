<template>
  <div>
    <TopNav styleType="4" />
    <Navbar ref="navbarRef" />
    <main class="about-page style-5">
      <About />
      <Team />
      <Culture />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav';
import About from '../../components/App/About2';
import Team from '../../components/App/Team';
import Culture from '../../components/App/Culture';
import Footer from '../../components/App/Footer';

export default {
  name: 'PageAboutApp',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    About,
    Team,
    Culture,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page About App",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
