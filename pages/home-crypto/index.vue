<template>
  <div>
    <Header />
    <main>
      <Features />
      <About />
      <Markets />
      <Timeline />
      <Team />
      <FAQ />
      <Blog />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Crypto/Header';
import Features from '../../components/Crypto/Features';
import About from '../../components/Crypto/About';
import Markets from '../../components/Crypto/Markets';
import Timeline from '../../components/Crypto/Timeline';
import Team from '../../components/Crypto/Team';
import FAQ from '../../components/Crypto/FAQ';
import Blog from '../../components/Crypto/Blog';
import Footer from '../../components/Crypto/Footer';

export default {
  name: 'HomeCrypto',
  layout: "Main",
  components: {
    Header,
    Features,
    About,
    Markets,
    Timeline,
    Team,
    FAQ,
    Blog,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Crypto",
    }
  },
  mounted() {
    document.body.classList.add('home-style-15');
  },
}
</script>
