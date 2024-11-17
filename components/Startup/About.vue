<template>
  <section class="about style-6" data-scroll-index="1">
    <div class="container">
      <div class="content section-padding">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5">
            <div class="info">
              <div class="section-head mb-40 style-6">
                <h2>
                  <template v-if="rtl">قم بترقية مشاريعك <br /> الى <span><small>أعلى المستويات</small></span></template>
                  <template v-else>Boost your business up to <span><small>high level</small></span></template>
                </h2>
              </div>
              <div class="text">
                {{
                  rtl 
                  ?
                  "مثل أي وكالة عظيمة ، نحن الأفضل بنتاجئنا التي قدمناها لعملنا الأخير. يلتزم مطورونا بالحفاظ على أعلى معايير الويب حتى يتحمل موقعك اختبار الزمن."
                  :
                  "Like any great agency, we are only as good as the result we deliver of our recent work. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time."
                }}
              </div>
              <div class="btns d-flex align-items-center mt-60">
                <NuxtLink :to="rtl ? '/rtl-page-about' : '/page-about-5'" class="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold me-3">
                  <span>
                    {{ rtl ? "من نحن" : "About Us" }} <i class="bi bi-arrow-right ms-1"></i>
                  </span>
                </NuxtLink>
                <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity class="vid-btn" @click="openVideo">
                  <i class="bi bi-play"></i>
                  <span>
                    {{ rtl ? "مشاهدة" : "See Our" }} <br /> {{ rtl ? "اخر عروضنا" : "Showreels" }}
                  </span>
                </a>
              </div>
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
    <ModalVideo channel="youtube" videoId="pGbIOC83-So" :isOpen.sync="videoIsOpen" />
  </section>
</template>

<script>
import ModalVideo from '../ModelVideo';

export default {
  components: {
    ModalVideo
  },
  data() {
    return {
      videoIsOpen: false
    }
  },
  props: ['rtl'],
  methods: {
    openVideo(e) {
      e.preventDefault();
      this.videoIsOpen = !this.videoIsOpen
    }
  },
}
</script>
