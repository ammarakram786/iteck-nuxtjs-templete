<template>
  <div>
    <Navbar />
    <Header />
    <main>
      <Projects />
      <Features />
      <Process />
      <Collections />
      <Community />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Navbars/NFTMarketplaceNav';
import Header from '../../components/NFTMarketplace/Header';
import Projects from '../../components/NFTMarketplace/Projects';
import Features from '../../components/NFTMarketplace/Features';
import Process from '../../components/NFTMarketplace/Process';
import Collections from '../../components/NFTMarketplace/Collections';
import Community from '../../components/NFTMarketplace/Community';
import Footer from '../../components/NFTMarketplace/Footer';

export default {
  name: 'HomeNFTMarketplace',
  layout: "Main",
  components: {
    Navbar,
    Header,
    Projects,
    Features,
    Process,
    Collections,
    Community,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - NFT Marketplace",
    }
  },
  mounted() {
    document.body.classList.add('home-style-12');
  },
}
</script>
