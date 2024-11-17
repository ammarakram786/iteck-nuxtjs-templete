<template>
  <section class="demos inner_pages section-padding" id="">
    <div class="container-xxl">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="sec-head text-center mb-40">
            <h3 class="text-capitalize fs-1"> Inner Pages </h3>
            <p class="color-777">A great collection of beautiful inner pages for your need. Choose the best suitable template and start customizing it.</p>
          </div>
        </div>
      </div>
      <div class="row" v-for="(pages, r) in innerPagesRows" :key="r">
        <div class="col-lg-4 col-md-6" v-for="(demo, i) in pages" :key="i">
          <div :class="`item ${demo.isNew ? 'item_ribbon green' : ''} ${demo.isComingSoon ? 'item_ribbon orange' : ''} ${demo.isFeatured ? 'item_ribbon red' : ''}`">
            <NuxtLink :to="demo.link" target="_blank">
              <div :class="demo.isUpcoming ? 'img blur_img' : 'img'">
                <img :src="demo.img" alt="" />
              </div>
              <div class="info">
                <span>{{demo.title}}</span>
                <h6>{{demo.type}}</h6>
              </div>
            </NuxtLink>
            <div class="new_demo_label" v-if="(demo.isNew || demo.isComingSoon || demo.isFeatured)">
              <span>
                {{demo.isNew && 'New'}}
                {{demo.isComingSoon && 'Soon'}}
                {{demo.isFeatured && 'Hot'}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import innerPages from '../../data/Preview/inner-pages.json';

export default {
  data() {
    return {
      innerPagesRows: []
    }
  },
  mounted() {
    let pagesInRow = 3;
    let rowIndex = 0;
    let rowsItems = [[]];

    innerPages.forEach((page, i) => {
      if (i > 0 && i % pagesInRow === 0) {
        rowIndex++;
        rowsItems[rowIndex] = [];
      }

      rowsItems[rowIndex].push(page);
    });

    this.innerPagesRows = rowsItems;
  },
}
</script>
