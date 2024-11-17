<template>
  <div>
    <Header />
    <main>
      <About />
      <Services />
      <Projects />
      <ChooseUs />
      <Testimonials />
      <Clients />
      <Numbers />
      <Team />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Startup/Header';
import About from '../../components/Startup/About';
import Services from '../../components/Startup/Services';
import Projects from '../../components/Startup/Projects';
import ChooseUs from '../../components/Startup/ChooseUs';
import Testimonials from '../../components/Startup/Testimonials';
import Clients from '../../components/Startup/Clients';
import Numbers from '../../components/Startup/Numbers';
import Team from '../../components/Startup/Team';
import Blog from '../../components/Startup/Blog';
import Contact from '../../components/Startup/Contact';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'HomeMarketingStartup',
  layout: "Main",
  components: {
    Header,
    About,
    Services,
    Projects,
    ChooseUs,
    Testimonials,
    Clients,
    Numbers,
    Team,
    Blog,
    Contact,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Marketing Startup",
    }
  }
}
</script>
