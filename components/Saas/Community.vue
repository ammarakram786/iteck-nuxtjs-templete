<template>
  <section class="community pt-40 style-5">
    <div class="container">
      <div class="section-head text-center mb-40 style-5">
        <h2 class="mb-20">{{ rtl ? 'لماذا' : 'Top' }} <span>{{ rtl ? 'نحن' : 'Reasons' }}</span> </h2>
        <p>{{ rtl ? 'توحيد بيانات عملك في لوحة تحكم بسيطة واحدة للتجارة الإلكترونية' : 'Unify your business data in one simple ecommerce dashboard' }}</p>
      </div>
      <div class="content rounded-pill">
        <div class="commun-card" v-for="(item, index) in communityData" :key="index">
          <div class="icon">
            <img :src="item.img" alt="" />
          </div>
          <div class="inf">
            <h5>{{ item.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import community from '../../data/Saas/community.json';
import communityRTL from '../../data/Saas/community-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    communityData() {
      return this.rtl ? communityRTL : community;
    }
  }
}
</script>
