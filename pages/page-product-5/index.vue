<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="product-page style-5">
      <Product styleType="5" />
      <ProductDetails styleType="5" />
      <RelatedProducts styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import Product from '../../components/Product';
import ProductDetails from '../../components/ProductDetails';
import RelatedProducts from '../../components/RelatedProducts';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'PageProduct5',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Product,
    ProductDetails,
    RelatedProducts,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Product 5",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
