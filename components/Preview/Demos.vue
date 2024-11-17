<template>
  <section class="demos section-padding bg-light" id="demos">
    <div class="container-xxl">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="sec-head text-center mb-40">
            <h2 class="num"><span class="color-grd">NEW<span class="thin"></span></span></h2>
            <h3 class="text-capitalize">Stunning Homepages</h3>
            <p class="color-777">A great collection of beautiful website templates for your need. Choose the best suitable template and start customizing it.</p>
          </div>
        </div>
      </div>
        <div class="row" v-for="(demos, r) in demosRows" :key="r">
          <div class="col-lg-4 col-md-6" v-for="(demo, i) in demos" :key="i">
            <div :class="`item ${demo.isNew ? 'item_ribbon green':''} ${demo.isComingSoon || demo.isArrived ? 'item_ribbon orange':''} ${demo.isFeatured ? 'item_ribbon red':''}`">
              <NuxtLink :to="demo.link" target="_blank">
                <div :class="demo.isUpcoming ? 'img blur_img' : 'img'">
                  <img :src="demo.img" alt="" />
                </div>
                <div class="info">
                  <span>{{ demo.title }}</span>
                  <h6>{{ demo.type }}</h6>
                </div>
              </NuxtLink>
              <div class="new_demo_label" v-if="demo.isNew || demo.isComingSoon || demo.isFeatured || demo.isArrived">
                <span>
                  {{ demo.isNew && 'New' }}
                  {{ demo.isComingSoon && 'Soon' }}
                  {{ demo.isFeatured && 'Hot' }}
                  {{ demo.isArrived && 'Arrived' }}
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import demos from '../../data/Preview/demos.json';

export default {
  data() {
    return {
      demosRows: []
    }
  },
  mounted() {
    let demosInRow = 3;
    let rowIndex = 0;
    let rowsItems = [[]];

    demos.forEach((demo, i) => {
      if (i > 0 && i % demosInRow === 0) {
        rowIndex++;
        rowsItems[rowIndex] = [];
      }

      rowsItems[rowIndex].push(demo);
    });

    this.demosRows = rowsItems;
  },
}
</script>
