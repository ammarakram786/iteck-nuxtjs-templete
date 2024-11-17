<template>
  <div>
    <Navbar ref="navbarRef" :whiteNotRounded="true" />
    <main class="single-project pt-50 style-5">
      <About styleType="5" :rtl="true" />
      <Challenge styleType="5" :rtl="true" />
      <Screenshots />
      <About2 styleType="5" :rtl="true" />
      <Projects styleType="5" :rtl="true" />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/StartupNav/RTLNav';
import About from '../../components/SingleProject/About';
import Challenge from '../../components/SingleProject/Challenge';
import Screenshots from '../../components/App/Screenshots';
import About2 from '../../components/SingleProject/About2';
import Projects from '../../components/SingleProject/Projects';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'RTLPageSingleProject',
  layout: "RTL",
  components: {
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
      titleTemplate: "%s - تفاصيل المشروع",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
