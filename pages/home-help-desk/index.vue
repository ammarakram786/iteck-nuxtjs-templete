<template>
  <div>
    <Header />
    <main>
      <Recommends />
      <Signup />
      <ScreenShots />
      <FeaturesStyle11 />
      <Integration />
      <FeaturesStyle9 />
      <Testimonials />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/HelpDesk/Header';
import Recommends from '../../components/HelpDesk/Recommends';
import Signup from '../../components/HelpDesk/Signup';
import ScreenShots from '../../components/HelpDesk/ScreenShots';
import FeaturesStyle11 from '../../components/HelpDesk/FeaturesStyle11';
import Integration from '../../components/HelpDesk/Integration';
import FeaturesStyle9 from '../../components/HelpDesk/FeaturesStyle9';
import Testimonials from '../../components/HelpDesk/Testimonials';
import Footer from '../../components/HelpDesk/Footer';

export default {
  name: 'HomeHelpDesk',
  layout: "Main",
  components: {
    Header,
    Recommends,
    Signup,
    ScreenShots,
    FeaturesStyle11,
    Integration,
    FeaturesStyle9,
    Testimonials,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Help Desk",
    }
  },
  mounted() {
    document.body.classList.add('home-style-11');
  },
}
</script>
