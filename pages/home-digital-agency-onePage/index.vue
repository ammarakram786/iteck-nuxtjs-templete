<template>
  <div>
    <TopNav />
    <Navbar />
    <Header />
    <main>
      <About />
      <Services />
      <ChooseUs />
      <Portfolio />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import TopNav from '../../components/Navbars/DigitalNav/TopNav';
import Navbar from '../../components/Navbars/DigitalNav/OnePageNav';
import Header from '../../components/Digital/Header';
import About from '../../components/Digital/About';
import Services from '../../components/Digital/Services';
import ChooseUs from '../../components/Digital/ChooseUs';
import Portfolio from '../../components/Digital/Portfolio';
import Testimonials from '../../components/Digital/Testimonials';
import Team from '../../components/Digital/Team';
import Blog from '../../components/Digital/Blog';
import Contact from '../../components/Digital/Contact';
import Footer from '../../components/Digital/Footer';

export default {
  name: 'HomeDigitalAgencyOnePage',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Header,
    About,
    Services,
    ChooseUs,
    Portfolio,
    Testimonials,
    Team,
    Blog,
    Contact,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Digital Agency One Page",
    }
  }
}
</script>
