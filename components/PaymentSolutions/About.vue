<template>
  <section class="about section-padding style-14">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 pe-lg-5">
          <div class="info">
            <div class="section-head mb-40">
              <p class="color-red1 text-uppercase fw-bold mb-10"> oslo co. sucess story </p>
              <h2 class="fs-1"> Read or Watch Our Story </h2>
            </div>
            <div class="text">
              Fund your account using a selection of deposit methods or receive money from friends, family and
              businesses.
            </div>
            <div class="text">
              Iteck has been helping to make it, send it and spend it for millions of customers since 2001. So wherever
              you are and whatever you want to do with your money, just skrill it.
            </div>
            <a href="#0" class="btn rounded-pill text-white bg-red1 fw-bold mt-30 hover-shadow" target="_blank">
              <small> Read Story <i class="fal fa-long-arrow-right ms-1"></i> </small>
            </a>
          </div>
        </div>
        <div class="col-lg-6 ps-lg-5">
          <div class="img">
            <img src="/assets/img/about/about_14_1.png" alt="" class="main-img" />
            <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity class="play_ptn" @click="openVideo">
              <i class="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
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
  methods: {
    openVideo(e) {
      e.preventDefault();
      this.videoIsOpen = !this.videoIsOpen
    }
  },
}
</script>
