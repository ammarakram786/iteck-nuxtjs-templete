<template>
  <section class="product pt-50">
    <div class="container">
      <ProductHead :productName="data.title" :rtl="rtl" />
      <div class="content">
        <div class="row gx-5">
          <ProductImages :productImages="data.images" />
          <div class="col-lg-6">
            <div class="product-info">
              <MainInfo :mainInfo="data.mainInfo" :rtl="rtl" />
              <div class="color-quantity">
                <ColorSelect :rtl="rtl" />
                <AddToCart :rtl="rtl" :styleType="styleType" />
              </div>
              <MoreInfo :moreInfo="data.moreInfo" :rtl="rtl" />
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productData from '../../data/App/product.json';
import productDataRTL from '../../data/App/product-rtl.json';

import ProductHead from './ProductHead'
import ProductImages from './ProductImages'
import MainInfo from './MainInfo'
import ColorSelect from './ColorSelect'
import AddToCart from './AddToCart'
import MoreInfo from './MoreInfo'
import SocialIcons from './SocialIcons'

export default {
  props: ['rtl', 'styleType'],
  computed: {
    data() {
      return this.rtl ? productDataRTL : productData;
    }
  },
  components: {
    ProductHead,
    ProductImages,
    MainInfo,
    ColorSelect,
    AddToCart,
    MoreInfo,
    SocialIcons
  }
}
</script>
