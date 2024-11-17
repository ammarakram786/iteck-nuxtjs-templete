<template>
  <div>
    <Navbar />
    <Header />
    <main>
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Blog />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Navbars/FreelancerNav';
import Header from '../../components/Freelancer/Header';
import About from '../../components/Freelancer/About';
import Services from '../../components/Freelancer/Services';
import Projects from '../../components/Freelancer/Projects';
import Testimonials from '../../components/Freelancer/Testimonials';
import Contact from '../../components/Freelancer/Contact';
import Blog from '../../components/Freelancer/Blog';
import Footer from '../../components/Freelancer/Footer';

export default {
  name: 'HomeFreelancePersonal',
  layout: "Main",
  components: {
    Navbar,
    Header,
    About,
    Services,
    Projects,
    Testimonials,
    Contact,
    Blog,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Freelance Personal",
    }
  },
  mounted() {
    document.body.classList.add('home-style-13');
  },
}
</script>
