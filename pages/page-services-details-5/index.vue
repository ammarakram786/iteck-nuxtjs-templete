<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <Header page="Service Details" title="Email Marketing" />
    <main class="services-details-page style-5">
      <Details />
      <Contact />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Header from '../../components/Style2/Header';
import Details from '../../components/Style2/ServicesDetails/Details';
import Contact from '../../components/Style2/ServicesDetails/Contact';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageServicesDetails5',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Header,
    Details,
    Contact,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Services Details 5",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
