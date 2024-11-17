<template>
  <div>
    <SideMenu />
    <Header />
    <main>
      <Domain />
      <About />
      <Services />
      <Pricing />
      <ChatBanner />
      <ChooseUs />
      <Testimonials />
      <Partners />
    </main>
    <Footer />
  </div>
</template>

<script>
import SideMenu from '../../components/CloudHosting/SideMenu';
import Header from '../../components/CloudHosting/Header';
import Domain from '../../components/CloudHosting/Domain';
import About from '../../components/CloudHosting/About';
import Services from '../../components/CloudHosting/Services';
import Pricing from '../../components/CloudHosting/Pricing';
import ChatBanner from '../../components/CloudHosting/ChatBanner';
import ChooseUs from '../../components/CloudHosting/ChooseUs';
import Testimonials from '../../components/CloudHosting/Testimonials';
import Partners from '../../components/CloudHosting/Partners';
import Footer from '../../components/CloudHosting/Footer';

export default {
  name: 'HomeCloudHosting',
  layout: "Main",
  components: {
    SideMenu,
    Header,
    Domain,
    About,
    Services,
    Pricing,
    ChatBanner,
    ChooseUs,
    Testimonials,
    Partners,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Cloud Hosting",
    }
  },
  mounted() {
    document.body.classList.add('home-style-9');
  }
}
</script>
