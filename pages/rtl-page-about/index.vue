<template>
  <div>
    <Navbar ref="navbarRef" :whiteNotRounded="true" />
    <main class="about-page style-5">
      <AboutHeader :rtl="true" :paddingTop="true" />
      <Community :rtl="true" />
      <Philosophy :rtl="true" />
      <ChooseUs :rtl="true" />
      <Clients :rtl="true" :padding="true" />
      <Numbers :rtl="true" />
      <Culture :rtl="true" />
      <Team :rtl="true" />
      <Contact :rtl="true" />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/StartupNav/RTLNav';
import AboutHeader from '../../components/Saas/AboutHeader';
import Community from '../../components/Saas/Community';
import Philosophy from '../../components/Saas/Philosophy';
import ChooseUs from '../../components/Saas/ChooseUs';
import Clients from '../../components/Saas/Clients';
import Numbers from '../../components/Saas/Numbers';
import Culture from '../../components/Saas/Culture';
import Team from '../../components/Saas/Team';
import Contact from '../../components/Saas/Contact';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'RTLPageAbout',
  layout: "RTL",
  components: {
    Navbar,
    AboutHeader,
    Community,
    Philosophy,
    ChooseUs,
    Clients,
    Numbers,
    Culture,
    Team,
    Contact,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - من نحن",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
