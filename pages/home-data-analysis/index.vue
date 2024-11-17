<template>
  <div>
    <Header />
    <main>
      <Services />
      <About />
      <Numbers />
      <Projects />
      <ChooseUs />
      <Testimonials />
      <Pricing />
      <Blog />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/DataAnalysis/Header';
import Services from '../../components/DataAnalysis/Services';
import About from '../../components/DataAnalysis/About';
import Numbers from '../../components/DataAnalysis/Numbers';
import Projects from '../../components/DataAnalysis/Projects';
import ChooseUs from '../../components/DataAnalysis/ChooseUs';
import Testimonials from '../../components/DataAnalysis/Testimonials';
import Pricing from '../../components/DataAnalysis/Pricing';
import Blog from '../../components/DataAnalysis/Blog';
import Footer from '../../components/DataAnalysis/Footer';

export default {
  name: 'HomeDataAnalysis',
  layout: "Main",
  components: {
    Header,
    Services,
    About,
    Numbers,
    Projects,
    ChooseUs,
    Testimonials,
    Pricing,
    Blog,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Data Analysis",
    }
  }
}
</script>
