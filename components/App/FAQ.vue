<template>
  <section class="faq section-padding style-4 pt-50" data-scroll-index="7">
    <div class="container">
      <div class="section-head text-center style-4">
        <small class="title_small">{{ rtl ? 'أسئلة شائعة' : 'Frequently Asked Question' }}</small>
        <h2 class="mb-30">{{ rtl ? 'بحاجة إلى' : 'Need A' }} <span>{{ rtl ? 'دعم ؟' : 'Support?' }}</span> </h2>
      </div>
      <div class="content">
        <div class="faq style-3 style-4">
          <div class="accordion" id="accordionSt4">
            <div class="row gx-5">
              <div class="col-lg-6">
                <template v-for="(item, index) in data">
                  <div :class="`accordion-item ${index === 3 ? '':'border-bottom'} rounded-0`" v-if="index <= 3" :key="index">
                    <h2 class="accordion-header" :id="`heading${item.id + 10}`">
                      <button class="accordion-button collapsed rounded-0 py-4" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${item.id + 10}`" aria-expanded="true" :aria-controls="`collapse${item.id + 10}`">
                        {{ item.question }}
                      </button>
                    </h2>
                    <div :id="`collapse${item.id + 10}`" class="accordion-collapse collapse rounded-0" :aria-labelledby="`heading${item.id + 10}`" data-bs-parent="#accordionSt4">
                      <div class="accordion-body">
                        <span v-if="rtl">{{ item.answer }}</span>
                        <span v-else>{{ item.answer.part1 }} <br /> {{ item.answer.part2 }}</span>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <div class="col-lg-6">
                <template v-for="(item, index) in data">
                  <div :class="`accordion-item ${index === data.length - 1 ? '':'border-bottom'} rounded-0`" v-if="index > 3" :key="index">
                    <h2 class="accordion-header" :id="`heading${item.id + 10}`">
                      <button :class="`accordion-button ${index !== 4 ? 'collapsed':''} rounded-0 py-4`" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${item.id + 10}`" aria-expanded="true" :aria-controls="`collapse${item.id + 10}`">
                        {{ item.question }}
                      </button>
                    </h2>
                    <div :id="`collapse${item.id + 10}`" :class="`accordion-collapse collapse rounded-0 ${index !== 4 ? '':'show'}`" :aria-labelledby="`heading${item.id + 10}`" data-bs-parent="#accordionSt4">
                      <div class="accordion-body">
                        <span v-if="rtl">{{ item.answer }}</span>
                        <span v-else>{{ item.answer.part1 }} <br /> {{ item.answer.part2 }}</span>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import faq from '../../data/App/faq.json';
import faqRTL from '../../data/App/faq-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    data() {
      return this.rtl ? faqRTL : faq;
    },
  }
}
</script>