<template>
  <div>
    <AbsoluteContainer>
      <TopNav styleType="5" />
      <Navbar ref="navbarRef" />
    </AbsoluteContainer>
    <main class="comming-soon-page style-5">
      <CommingSoon />
    </main>
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import AbsoluteContainer from '../../components/Navbars/AbsoluteContainer';
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import CommingSoon from '../../components/Style2/CommingSoon';

export default {
  name: 'PageCommingSoon',
  layout: "Main",
  components: {
    AbsoluteContainer,
    TopNav,
    Navbar,
    CommingSoon
  },
  head() {
    return {
      titleTemplate: "%s - Page Comming Soon",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
