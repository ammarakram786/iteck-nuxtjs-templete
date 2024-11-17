<template>
  <section class="about section-padding style-5 style-6">
    <div class="content border-0 p-0">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-4 order-2 order-lg-0">
            <div class="section-head mb-30 style-5">
              <h2>{{ rtl ? 'كلمة' : 'Iteck’s' }} <span>{{ rtl ? 'عنا' : 'Philosophy' }}</span> </h2>
            </div>
            <p>
              {{ rtl ? 'مثل أي وكالة عظيمة ، نحن الأفضل بنتاجئنا التي قدمناها لعملنا الأخير. يلتزم مطورونا بالحفاظ على أعلى معايير الويب حتى يتحمل موقعك اختبار الزمن.' : 'Like any great agency, we are only as good as the result we deliver of our recent work. Our developers are committed to maintaining the highest web standards so that your site.' }}
            </p>
            <div class="line-links">
              <a href="#">{{ rtl ? 'كن الأول في صناعة تكنولوجيا المعلومات' : 'Become 1st in the IT industrial' }}</a>
              <a href="#">{{ rtl ? 'سعر تنافسى' : 'Competitive Price' }}</a>
              <a href="#">{{ rtl ? 'تحسين مستوى حياتك' : 'Enhance the quality of life' }}</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img">
              <img src="/assets/img/about/superman_3d.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/about/about_s6_bubbles.png" alt="" class="bubbles rotate-center" />
  </section>
</template>

<script>
export default {
  props: ['rtl']
}
</script>
