<template>
  <section class="clients style-5" data-scroll-index="6">
    <div class="container">
      <div class="section-head mb-70 style-6 text-center" v-if="rtl">
        <h2 class="mb-20"> يثق بنا الاف <span><small>المسثمرين</small></span></h2>
        <p class="color-666">أكثر من 15000 شركة وشريك موثوق بهم واختيار Itekseo</p>
      </div>
      <div class="section-head mb-70 style-6 text-center" v-else>
        <h2 class="mb-20"> Trusted by thoudsands
          <span> <small> Businesss </small> </span>
        </h2>
        <p class="color-666">More 15,000 Companies & partners trusted & choice Itekseo</p>
      </div>
      <div class="content d-flex flex-wrap">
        <a href="#" class="img img-card" v-for="(client, index) in clients" :key="index">
          <img :src="client" alt="" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import clients from '../../data/Startup/clients.json';

export default {
  props: ['rtl'],
  data() {
    return {
      clients
    }
  },
}
</script>
