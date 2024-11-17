<template>
  <div>
    <TopNav styleType="4" />
    <Navbar ref="navbarRef" />
    <main class="single-project pt-50 style-5">
      <About styleType="4" />
      <Challenge styleType="4" />
      <Screenshots />
      <About2 styleType="4" />
      <Projects styleType="4" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav';
import About from '../../components/SingleProject/About';
import Challenge from '../../components/SingleProject/Challenge';
import Screenshots from '../../components/App/Screenshots';
import About2 from '../../components/SingleProject/About2';
import Projects from '../../components/SingleProject/Projects';
import Footer from '../../components/App/Footer';

export default {
  name: 'PageSingleProjectApp',
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
      titleTemplate: "%s - Page Single Project App",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
