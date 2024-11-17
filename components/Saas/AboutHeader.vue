<template>
  <header :class="`about-page-sec style-5 ${paddingTop ? 'pt-100':''}`">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="info">
            <h1>
              <template v-if="rtl">
                نحن نقدم حلول تكنولوجيا المعلومات  المثالية لأي
              </template>
              <template v-else>
                 We provide perfect <br /> IT Solutions & Technology for any
              </template>
              <span class="ms-2">
                {{ rtl ? 'شركة ناشئة' : 'Startups' }}
                <img src="/assets/img/header/head5_line.png" alt="" class="head-line" />
                <img src="/assets/img/header/head5_pen.png" alt="" class="head-pen" />
              </span>
            </h1>
            <p>
              {{ rtl ? 'يساعدك Iteck على توحيد هوية علامتك التجارية من خلال جمع وتخزين ' : 'Iteck helps you unify your brand identity by collecting, storing and distributing' }} <br /> {{ rtl ? 'وتوزيع رموز وأصول التصميم - تلقائيًا.' : 'design tokens and assets — automatically.' }}
            </p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="main-vid">
            <img src="/assets/img/vid_banner5.png" alt="" />
            <a href="https://youtu.be/pGbIOC83-So?t=21" @click="openVideo" class="play-icon">
              <i class="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/header/hand_megaphone.png" alt="" class="hand-mega slide_up_down" />
    <img src="/assets/img/header/head6_rating.png" alt="" class="head6-rating scale_up_down" />
    <img src="/assets/img/header/header5_linechart.png" alt="" class="head6-charts scale_up_down" />
    <img src="/assets/img/header/rocket.png" alt="" class="head6-rocket" />
    <ModalVideo channel="youtube" videoId="pGbIOC83-So" :isOpen.sync="videoIsOpen" />
  </header>
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
  props: ['rtl', 'paddingTop'],
  methods: {
    openVideo(e) {
      e.preventDefault();
      this.videoIsOpen = !this.videoIsOpen
    }
  },
}
</script>
