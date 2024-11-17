<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <Header page="Careers" title="careers Page" />
    <main class="careers-page style-5 pt-100">
      <Features />
      <Images />
      <Positions />
      <CareerForm />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Header from '../../components/Style2/Header';
import Features from '../../components/Style2/Careers/Features';
import Images from '../../components/Style2/Careers/Images';
import Positions from '../../components/Style2/Careers/Positions';
import CareerForm from '../../components/Style2/CareerDetails/CareerForm';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageCareers5',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Header,
    Features,
    Images,
    Positions,
    CareerForm,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Careers 5",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
