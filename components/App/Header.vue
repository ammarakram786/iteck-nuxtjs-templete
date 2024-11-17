<template>
  <header class="style-4" data-scroll-index="0">
    <div class="content">
      <div class="container">
        <div class="row gx-0">
          <div class="col-lg-6">
            <div class="info">
              <small class="mb-50 title_small">{{ rtl ? 'نوتيرو - تطبيق مذكرة سهل الاستخدام' : 'Notero - Easy Notes App' }}</small>
              <h1 class="mb-30">{{ rtl ? 'احفظ' : 'Note' }} <span>{{ rtl ? 'كل شئ' : 'Your Everything' }}</span> {{ rtl ? 'على التطبيق' : 'In One App' }}</h1>
              <p class="text">{{ rtl ? 'لا يلزم الترميز لإجراء التخصيصات. يحتوي المُخصص المباشر' : 'No coding required to make customizations. The live customizer' }}<br />{{ rtl ? 'على كل ما تحتاجه.' : 'has everything you need.' }}</p>
              <div class="d-flex align-items-center mt-50">
                <a href="https://www.apple.com/app-store" rel="noreferrer" class="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
                  <small> <i class="fab fa-apple me-2 pe-2 border-end"></i>{{ rtl ? 'تحميل التطبيق' : 'Download App' }}</small>
                </a>
                <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity class="play-btn" @click="openVideo">
                  <span class="icon me-2">
                    <i class="fas fa-play ms-1"></i>
                  </span>
                  <strong class="small">{{ rtl ? 'مشاهدة' : 'View' }} <br />{{ rtl ? 'البرومو' : 'Promotion' }}</strong>
                </a>
              </div>
              <span class="mt-100 me-5">
                <small
                  class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-2">
                  <i class="fas fa-sync"></i>
                </small>
                <small class="text-uppercase">{{ rtl ? 'مجانى لمده 14 يوم' : 'Free 14 Days Trial' }}</small>
              </span>
              <span class="mt-100">
                <small
                  class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-2">
                  <i class="fas fa-credit-card"></i>
                </small>
                <small class="text-uppercase">{{ rtl ? 'دفعة لمرة واحدة' : 'One time payment' }}</small>
              </span>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img">
              <img src="/assets/img/header/header_4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/header_4_bubble.png" alt="" class="bubble" />
    </div>
    <img src="/assets/img/header/header_4_wave.png" alt="" class="wave" />
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
  props: ['rtl'],
  methods: {
    openVideo(e) {
      e.preventDefault();
      this.videoIsOpen = !this.videoIsOpen
    }
  },
}
</script>
