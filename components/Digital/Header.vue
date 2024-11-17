<template>
  <header class="section-padding style-1" data-scroll-index="0">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-lg-6">
            <div class="info">
              <div class="section-head mb-60">
                <h6 class="color-main text-uppercase">Iteck agency</h6>
                <h2>
                  Technology & IT <span class="fw-normal">Solutions</span>
                </h2>
              </div>
              <div class="text">
                We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.
              </div>
              <div class="bttns mt-5">
                <NuxtLink to="/page-services-5" class="btn btn-dark">
                  <span>our services</span>
                </NuxtLink>
                <a href="https://youtu.be/pGbIOC83-So?t=21" class="vid-btn" @click="openVideo">
                  <i class="bi bi-play wow heartBeat infinite slow"></i>
                  <span>Iteck’s <br /> Showreels</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="img">
              <img src="/assets/img/header/head.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/header/head_shape_r.png" alt="" class="head-shape-r wow" />
    <img src="/assets/img/header/head_shape_l.png" alt="" class="head-shape-l wow" />
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
  methods: {
    openVideo(e) {
      e.preventDefault();
      this.videoIsOpen = !this.videoIsOpen
    }
  },
}
</script>