<template>
  <div>
    <SideMenu />
    <Navbar />
    <Header />
    <main>
      <Features />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ChooseUs />
      <Blog />
      <ChatBanner />
    </main>
    <Footer />
  </div>
</template>

<script>
import SideMenu from '../../components/ITCreative/SideMenu';
import Navbar from '../../components/Navbars/ITCreativeNav';
import Header from '../../components/ITCreative/Header';
import Features from '../../components/ITCreative/Features';
import About from '../../components/ITCreative/About';
import Services from '../../components/ITCreative/Services';
import Projects from '../../components/ITCreative/Projects';
import Testimonials from '../../components/ITCreative/Testimonials';
import ChooseUs from '../../components/ITCreative/ChooseUs';
import Blog from '../../components/ITCreative/Blog';
import ChatBanner from '../../components/ITCreative/ChatBanner';
import Footer from '../../components/ITCreative/Footer';

export default {
  name: 'HomeITSolutions2',
  layout: "Main",
  components: {
    SideMenu,
    Navbar,
    Header,
    Features,
    About,
    Services,
    Projects,
    Testimonials,
    ChooseUs,
    Blog,
    ChatBanner,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Creative It Solutions",
    }
  }
}
</script>
