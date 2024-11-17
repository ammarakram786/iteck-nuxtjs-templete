<template>
  <div>
    <Navbar />
    <Header />
    <main>
      <Services />
      <ChooseUs />
      <Reviews />
      <Pricing />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Navbars/ITNav/OnePageNav';
import Header from '../../components/IT/Header';
import Services from '../../components/IT/Services';
import ChooseUs from '../../components/IT/ChooseUs';
import Reviews from '../../components/IT/Reviews';
import Pricing from '../../components/IT/Pricing';
import Blog from '../../components/IT/Blog';
import Contact from '../../components/IT/Contact';
import Footer from '../../components/IT/Footer';

export default {
  name: 'HomeITSolutionsOnePage',
  layout: "Main",
  components: {
    Navbar,
    Header,
    Services,
    ChooseUs,
    Reviews,
    Pricing,
    Blog,
    Contact,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - IT Solutions One Page",
    }
  }
}
</script>
