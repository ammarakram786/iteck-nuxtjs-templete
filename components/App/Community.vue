<template>
  <section class="community section-padding pt-0 style-4">
    <div class="container">
      <div class="section-head text-center style-4">
        <small class="title_small">{{ rtl ? 'مجتمع نوتيرو' : 'Notero Community' }}</small>
        <h2 class="mb-30">{{ rtl ? 'انضم إلى' : 'Join Into' }} <span>{{ rtl ? 'مركزنا' : 'Our Hub' }}</span> </h2>
      </div>
      <div class="content">
        <a href="#" class="commun-card" v-for="(item, index) in data" :key="index">
          <div class="icon">
            <i :class="item.icon"></i>
          </div>
          <div class="inf">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import communityCards from '../../data/App/community.json';
import communityCardsrRTL from '../../data/App/community-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    data() {
      return this.rtl ? communityCardsrRTL : communityCards;
    }
  }
}
</script>
