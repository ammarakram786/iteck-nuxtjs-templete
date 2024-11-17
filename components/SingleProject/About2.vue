<template>
  <section class="about-app style-5">
    <div class="container">
      <div class="content text-center">
        <div class="img-content pt-70 pb-100 border-bottom brd-gray">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="info mt-30">
                <h5 class="lh-4">
                  <template v-if="rtl">
                    فريق في <a href="#" :class="`color-blue${styleType}`" >@iteck</a> هو مكرس بشكل لا يصدق ، وواسع المعرفة ، ومفيد. كان المنتج النهائي جميلًا ويستحق كل بنس. أوصي بشدة بمختبرات.
                  </template>
                  <template v-else>
                    “The team at <a href="#" :class="`color-blue${styleType}`" >@iteck</a> is incredibly dedicated, knowledgeable, and helpful. The finished product was beautiful, and worth every penny. I would absolutely recommend Moonex Labs.”
                  </template>
                </h5>
                <a href="#" class="mt-60 color-666 fs-12px text-uppercase">- <strong class="color-000">{{ rtl ? 'جون هنري ' : 'Jhon henry' }} </strong>{{ rtl ? ', المدير التنفيذي في Notero JSC -' : ', ceo at notero jsc -' }} </a>
                <div class="share mt-100">
                  <span class="color-999 fs-12px text-uppercase d-block">{{ rtl ? 'شارك هذا المشروع' : 'share this project' }}</span>
                  <a href="#" :class="`social-icon hover-blue${styleType} me-2`">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" :class="`social-icon hover-blue${styleType} me-2`">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" :class="`social-icon hover-blue${styleType} me-2`">
                    <i class="fab fa-pinterest"></i>
                  </a>
                  <a href="#" :class="`social-icon hover-blue${styleType} me-2`">
                    <i class="fab fa-goodreads-g"></i>
                  </a>
                  <a href="#" :class="`social-icon hover-blue${styleType}`">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="next-prog section-padding">
          <h5 class="color-999 text-uppercase fw-light">{{ rtl ? 'المشروع التالى' : 'next project' }}</h5>
          <a href="#" class="color-000 fs-1 fw-bold mt-20">{{ rtl ? 'Criftocy صفحة هبوط' : 'Criftocy Landing Page' }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['rtl', 'styleType']
}
</script>
