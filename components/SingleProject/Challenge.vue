<template>
  <div class="challenge section-padding style-5 overflow-hidden">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-4">
          <div :class="`section-head style-${styleType}`">
            <h2>{{ rtl ? '' : 'Our' }} <br /> <span>{{ rtl ? 'التحدى' : 'Challenge' }}</span> </h2>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="inf">
            <div class="text color-666 mb-20">
              {{ rtl ? 'قم بإنشاء موقع ويب غير تقليدي ولكنه سهل الاستخدام - مبتكر ، بتصميم نظيف وبسيط يتواصل ويعرض محتوى الوسائط المتعددة. الموقع الذي ينشر الرسالة: "إنها قصص حبك.”' : 'Create an unconventional yet user-friendly website – innovative, with a clean & simple design that communicates and showcases multi-media content. Site that spreads the message: ”It’s stories your love.”' }}
            </div>
            <ul class="color-000">
              <li class="d-flex mb-10" v-for="(item, index) in data.challenge" :key="index">
                <i class="bi bi-dot fs-6 me-2"></i> {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="imgs mt-60 mb-100">
        <div class="row">
          <div class="col-lg-6">
            <div class="img img-cover rounded-3 overflow-hidden mb-30 mb-lg-0">
              <img src="/assets/img/single_project/ch_1.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img img-cover rounded-3 overflow-hidden">
              <img src="/assets/img/single_project/ch_2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="row gx-5">
        <div class="col-lg-4">
          <div :class="`section-head style-${styleType}`">
            <h2>{{ rtl ? 'الحلول' : 'Solution' }} & <br /> <span>{{ rtl ? 'النتائج' : 'Result' }}</span></h2>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="inf">
            <div class="text color-666 mb-10">
              {{ rtl ? 'كان نهجنا هو تقديم الموقع كمنصة تحرير مرئية مع ميزات ربع سنوية بناءً على الأحداث والمناسبات التي تركز عليها العلامة التجارية. سيتم تمييز كل تركيز ربع سنوي بواسطة البطل والعلامات المخصصة التي تقوم بتصفية المحتوى.' : 'Our approach was to present the site as a visual editorial platform with quarterly features based on events and occasions the brand was focused on. Each quarterly focus would be marked by the hero and custom tags that filter content.' }}
            </div>
            <div class="text color-666 mb-20">
              {{ rtl ? 'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم ، لكن الغالبية تعرضت للتغيير بشكل ما ، عن طريق إدخال بعض الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق إلى حد ما.' : 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' }}
            </div>
            <div class="color-000 mt-50">
              <div class="row">
                <div class="col-lg-6" v-for="(item, index) in data.feats" :key="index">
                  <div :class="`d-flex ${index !== data.length - 1 ? 'mb-20':''} fw-bold`">
                    <div :class="`icon-20 d-inline-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-blue${styleType} text-white flex-shrink-0 me-3`">
                      <i class="bi bi-check"></i>
                    </div>
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import challengeData from '../../data/SingleProject/challenge.json'
import challengeDataRTL from '../../data/SingleProject/challenge-rtl.json'

export default {
  props: ['rtl', 'styleType'],
  data() {
    return {
      data: this.rtl ? challengeDataRTL : challengeData
    }
  },
}
</script>
