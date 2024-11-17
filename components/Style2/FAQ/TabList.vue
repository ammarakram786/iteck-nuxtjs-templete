<template>
  <section class="faq-tabs style-5">
    <div class="container">
      <ul class="nav nav-pills" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation" v-for="(tab, index) in faqTabs" :key="index">
          <button :class="`nav-card ${index === 0 ? 'active':''}`" :id="tab.id" data-bs-toggle="pill" :data-bs-target="tab.target" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
            <div class="icon img-contain">
              <img :src="tab.image" alt="" />
            </div>
            <div class="info">
              <h5> {{ tab.title }} </h5>
              <p> {{ tab.anwsers }} Answer </p>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import faqTabs from '../../../data/Style2/faq-tabs.json';

export default {
  data() {
    return {
      faqTabs
    }
  },
}
</script>