<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="single-project pt-50 style-5">
      <About styleType="5" />
      <Challenge styleType="5" />
      <Screenshots />
      <About2 styleType="5" />
      <Projects styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import About from '../../components/SingleProject/About';
import Challenge from '../../components/SingleProject/Challenge';
import Screenshots from '../../components/App/Screenshots';
import About2 from '../../components/SingleProject/About2';
import Projects from '../../components/SingleProject/Projects';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageSingleProject5',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    About,
    Challenge,
    Screenshots,
    About2,
    Projects,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Single Project 5",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
