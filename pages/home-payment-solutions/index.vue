<template>
  <div>
    <Navbar />
    <Header />
    <main>
      <Clients />
      <Features />
      <ChooseUs />
      <Screenshots />
      <Numbers />
      <About />
      <Contact />
      <Testimonials />
      <Blog />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Navbars/PaymentSolutionsNav';
import Header from '../../components/PaymentSolutions/Header';
import Clients from '../../components/PaymentSolutions/Clients';
import Features from '../../components/PaymentSolutions/Features';
import ChooseUs from '../../components/PaymentSolutions/ChooseUs';
import Screenshots from '../../components/PaymentSolutions/Screenshots';
import Numbers from '../../components/PaymentSolutions/Numbers';
import About from '../../components/PaymentSolutions/About';
import Contact from '../../components/PaymentSolutions/Contact';
import Testimonials from '../../components/PaymentSolutions/Testimonials';
import Blog from '../../components/PaymentSolutions/Blog';
import Footer from '../../components/PaymentSolutions/Footer';

export default {
  name: 'HomePaymentSolutions',
  layout: "Main",
  components: {
    Navbar,
    Header,
    Clients,
    Features,
    ChooseUs,
    Screenshots,
    Numbers,
    About,
    Contact,
    Testimonials,
    Blog,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Payment Solutions",
    }
  },
  mounted() {
    document.body.classList.add('home-style-14');
  },
}
</script>
