<template>
  <div>
    <Navbar ref="navbarRef" :whiteNotRounded="true" />
    <main class="contact-page style-5">
      <Form styleType="5" :rtl="true" />
      <Map />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/StartupNav/RTLNav';
import Form from '../../components/Contact/Form';
import Map from '../../components/Contact/Map';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'RTLPageContact',
  layout: "RTL",
  components: {
    Navbar,
    Form,
    Map,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - اتصل بنا",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
