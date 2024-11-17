<template>
  <div>
    <Navbar ref="navbarRef" :whiteNotRounded="true" />
    <main class="product-page style-5">
      <Product styleType="5" :rtl="true" />
      <ProductDetails styleType="5" :rtl="true" />
      <RelatedProducts styleType="5" :rtl="true" />
    </main>
    <Footer :rtl="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/StartupNav/RTLNav';
import Product from '../../components/Product';
import ProductDetails from '../../components/ProductDetails';
import RelatedProducts from '../../components/RelatedProducts';
import Footer from '../../components/Startup/Footer';

export default {
  name: 'RTLPageProduct',
  layout: "RTL",
  components: {
    Navbar,
    Product,
    ProductDetails,
    RelatedProducts,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - المنتج",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
