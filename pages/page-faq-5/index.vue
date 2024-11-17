<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <Header page="Faq" title="FAQ Page" />
    <main class="faq-page style-5 section-padding">
      <TabList />
      <TabsContent />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Header from '../../components/Style2/Header';
import TabList from '../../components/Style2/FAQ/TabList';
import TabsContent from '../../components/Style2/FAQ/TabsContent';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageFAQ5',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Header,
    TabList,
    TabsContent,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page FAQ 5",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
