<template>
  <div>
    <Header />
    <Features />
    <Demos />
    <InnerPages />
    <BuyNow />
    <Portfolio />
    <Codei />
    <BestFeatures />
    <Responsive />
    <AllFeatures />
    <Testimonials />
    <CallToAction />
  </div>
</template>

<script>
import Header from '../components/Preview/Header';
import Features from '../components/Preview/Features';
import Demos from '../components/Preview/Demos';
import InnerPages from '../components/Preview/InnerPages';
import BuyNow from '../components/Preview/BuyNow';
import Portfolio from '../components/Preview/Portfolio';
import Codei from '../components/Preview/Codei';
import BestFeatures from '../components/Preview/BestFeatures';
import Responsive from '../components/Preview/Responsive';
import AllFeatures from '../components/Preview/AllFeatures';
import Testimonials from '../components/Preview/Testimonials';
import CallToAction from '../components/Preview/CallToAction';

export default {
  name: 'LandingPreview',
  layout: "Preview",
  components: {
    Header,
    Features,
    Demos,
    InnerPages,
    BuyNow,
    Portfolio,
    Codei,
    BestFeatures,
    Responsive,
    AllFeatures,
    Testimonials,
    CallToAction,
  },
  head() {
    return {
      titleTemplate: "%s - Preview"
    }
  },
  mounted() {
    if (document.querySelectorAll('body').length > 1) {
      document.body.remove();
    }

    document.body.classList.add('index-main');
  }
}
</script>
