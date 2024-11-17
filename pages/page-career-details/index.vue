<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <Header page="Career Details" title="Product Designer" />
    <main class="career-details-page style-5 pt-100">
      <JobDetails />
      <CareerPositions />
      <CareerForm />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Header from '../../components/Style2/Header';
import JobDetails from '../../components/Style2/CareerDetails/JobDetails';
import CareerPositions from '../../components/Style2/CareerDetails/CareerPositions';
import CareerForm from '../../components/Style2/CareerDetails/CareerForm';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageCareerDetails',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Header,
    JobDetails,
    CareerPositions,
    CareerForm,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Career Details",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
