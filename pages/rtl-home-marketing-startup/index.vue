<template>
  <div>
    <Header :rtl="true" />
    <main>
      <About :rtl="true" />
      <Services :rtl="true" />
      <Projects :rtl="true" />
      <ChooseUs :rtl="true" />
      <Testimonials :rtl="true" />
      <Clients :rtl="true" />
      <Numbers :rtl="true" />
      <Team :rtl="true" />
      <Blog :rtl="true" />
      <Contact :rtl="true" />
    </main>
    <Footer :rtl="true" />
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
  name: 'RTLHomeMarketingStartup',
  layout: "RTL",
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
      titleTemplate: "%s - التسويق الالكترونى",
    }
  }
}
</script>
