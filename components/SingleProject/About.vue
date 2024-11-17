<template>
  <section class="about-app style-5">
    <div class="container">
      <div class="content text-center">
        <h1 class="color-000 mb-50">Notero - {{ rtl ? 'تطبيق الملاحظات السهل' : 'Easy Notes App' }}</h1>
        <div class="about-cards border-bottom brd-gray">
          <div class="row">
            <div class="col-lg-3 col-sm-6" v-for="(item, index) in metadata" :key="index">
              <div class="about-card mb-30 mb-lg-0">
                <small class="d-block">
                  {{ item.title }}
                </small>
                <h6>
                  <template v-if="typeof item.description === 'string'">{{ item.description }}</template>
                  <template v-else>{{ item.description.part1 }} <br /> {{ item.description.part2 }}</template>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="img-content pt-70 pb-70 border-bottom brd-gray overflow-hidden">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="img text-center">
                <img src="/assets/img/single_project/2mobs.png" alt="" class="main-img" />
                <img src="/assets/img/single_project/bubbls.png" alt="" class="bubbls" />
                <img src="/assets/img/single_project/circle.png" alt="" class="circle" />
              </div>
              <div class="info mt-30">
                <h5 class="lh-4">
                  {{ rtl ? 'حافظ على تركيزك وإنتاجيتك مع مساحة ملاحظات نظيفة وخالية من الفوضى. الطرق المرنة لتنظيم ملاحظاتك: علامات التجزئة ، دفاتر الملاحظات المتداخلة ، تثبيت الملاحظات في أعلى قائمة الملاحظات ، إلخ.' : 'Stay focused and productive with a clean and clutter-free note space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc' }}
                </h5>
                <a href="#" :class="`color-blue${styleType} mt-60`">https://example.domain</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutMetadata from '../../data/SingleProject/about.json';
import aboutMetadataRTL from '../../data/SingleProject/about-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  data() {
    return {
      metadata: this.rtl ? aboutMetadataRTL : aboutMetadata
    }
  },
}
</script>
