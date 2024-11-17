<template>
  <section class="choose-us section-padding style-6" data-scroll-index="4">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6">
          <div class="img">
            <img src="/assets/img/choose_us/man_arrow.png" alt="" />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="info">
            <div class="section-head mb-20 style-6">
              <h2 v-if="rtl"> لماذا تختار <span><small>Itekseo</small></span></h2>
              <h2 v-else>Why choose <span><small>Itekseo</small></span></h2>
            </div>
            <div class="text mb-50">
              <template v-if="rtl">نحن متحمسون لعملنا. يظل المصممون لدينا في الصدارة لتقديم تصميمات مواقع ويب جذابة وسهلة الاستخدام لجعل عملك متميزًا</template>
              <template v-else>We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out</template>
            </div>
            <ul>
              <li :class="`d-flex ${index !== data.length - 1 ? 'mb-40':''}`" v-for="(item, index) in data" :key="index">
                <small
                  class="icon-60 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-4 flex-shrink-0">
                  <img :src="item.image" alt="" />
                </small>
                <div class="inf">
                  <h5>{{ item.title }}</h5>
                  <p class="fs-12px color-666 mt-2">
                    {{ item.text }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/about/about_s6_bubbles.png" alt="" class="bubbles rotate-center" />
  </section>
</template>

<script>
import chooseUsData from '../../data/Startup/chooseus.json';
import chooseUsDataRTL from '../../data/Startup/chooseus-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    data() {
      return this.rtl ? chooseUsDataRTL : chooseUsData;
    },
  }
}
</script>
