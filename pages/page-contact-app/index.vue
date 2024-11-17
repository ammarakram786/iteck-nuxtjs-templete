<template>
  <div>
    <TopNav styleType="4" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="contact-page style-5">
      <Community />
      <Form styleType="4" />
      <Map />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav';
import Community from '../../components/Contact/Community';
import Form from '../../components/Contact/Form';
import Map from '../../components/Contact/Map';
import Footer from '../../components/App/Footer';

export default {
  name: 'PageContactApp',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Community,
    Form,
    Map,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Contact App",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
