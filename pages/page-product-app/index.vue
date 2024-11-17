<template>
  <div>
    <TopNav styleType="4" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="product-page style-5">
      <Product styleType="4" />
      <ProductDetails styleType="4" />
      <RelatedProducts styleType="4" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/AppNav';
import Product from '../../components/Product';
import ProductDetails from '../../components/ProductDetails';
import RelatedProducts from '../../components/RelatedProducts';
import Footer from '../../components/App/Footer';

export default {
  name: 'PageProductApp',
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
      titleTemplate: "%s - Page Product App",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
