<template>
  <div>
    <Navbar />
    <Header />
    <main>
      <Testimonials />
      <Services />
      <About />
      <Projects />
      <Pricing />
      <Team />
      <Blog />
      <ChatBanner />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Navbars/SoftwareNav/OnePageNav';
import Header from '../../components/Software/Header';
import Testimonials from '../../components/Software/Testimonials';
import Services from '../../components/Software/Services';
import About from '../../components/Software/About';
import Projects from '../../components/Software/Projects';
import Pricing from '../../components/Software/Pricing';
import Team from '../../components/Software/Team';
import Blog from '../../components/Software/Blog';
import ChatBanner from '../../components/Software/ChatBanner';
import Footer from '../../components/Software/Footer';

export default {
  name: 'HomeSoftwareCompany',
  layout: "Main",
  components: {
    Navbar,
    Header,
    Testimonials,
    Services,
    About,
    Projects,
    Pricing,
    Team,
    Blog,
    ChatBanner,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Software Company",
    }
  }
}
</script>
