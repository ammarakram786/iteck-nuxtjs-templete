<template>
  <section class="shop section-padding pt-50">
    <div class="container">
      <div :class="`section-head text-center style-${styleType} ${styleType === '5' ? 'mb-80' : ''}`">
        <h2 class="mb-20">{{ rtl ? 'سوق' : 'Iteck’s' }}  <span> {{ rtl ? 'Iteck' : 'Store' }} </span> </h2>
        <div class="page-links color-999">
          <a href="#" class="me-2">
            {{ rtl ? 'الرئيسية' : 'Home' }}
          </a>
          <span class="me-2">/</span>
          <a href="#" class="color-000">
            {{ rtl ? 'سوق Iteck' : 'Iteck’s Store' }}
          </a>
        </div>
      </div>
      <div class="row gx-4">
        <div class="col-lg-3 col-sm-6">
          <div class="filter">
            <Categories :rtl="rtl" />
            <Filters :styleType="styleType" :rtl="rtl" />
          </div>
        </div>
        <div class="col-lg-9">
          <div class="products-content">
            <TopFilter @setlistview="setListView" :rtl="rtl" />
            <div :class="`products ${listView ? 'list-view':''}`">
              <div class="row gx-2 gx-lg-4">
                <Product v-for="(item, index) in data" :key="index" :product="item" :rtl="rtl" />
              </div>
              <div :class="`pagination style-5 color-${styleType} justify-content-center mt-50`">
                <a href="#" class="active">
                  <span>1</span>
                </a>
                <a href="#">
                  <span>2</span>
                </a>
                <a href="#">
                  <span>3</span>
                </a>
                <a href="#">
                  <span>4</span>
                </a>
                <a href="#">
                  <span>...</span>
                </a>
                <a href="#">
                  <span>20</span>
                </a>
                <a href="#">
                  <span class="text">{{ rtl ? 'التالي' : 'next' }} <i class="fas fa-chevron-right"></i> </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import shopData from '../../data/App/shop.json';
import shopDataRTL from '../../data/App/shop-rtl.json';

import Categories from './Categories';
import Filters from './Filters';
import Product from './Product';
import TopFilter from './TopFilter';

export default {
  props: ['rtl', 'styleType'],
  data() {
    return {
      data: this.rtl ? shopDataRTL : shopData,
      listView: false
    }
  },
  components: {
    Categories,
    Filters,
    Product,
    TopFilter
  },
  methods: {
    setListView(v) {
      this.listView = v;
    }
  },
}
</script>
