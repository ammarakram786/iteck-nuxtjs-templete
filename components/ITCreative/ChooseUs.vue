<template>
  <section class="choose-us style-7 section-padding">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="img">
            <img src="/assets/img/choose_us/choose7.jpg" alt="" />
            <a href="https://youtu.be/pGbIOC83-So?t=21" class="play_btn" @click="openVideo">
              <i class="fas fa-play"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="info">
            <div class="section-head style-4 mb-40">
              <div class="top-title mb-10">
                <img src="/assets/img/line_l.png" alt="" />
                <h5> Why Choose Us </h5>
              </div>
              <h2 class="text-white">
                Why Choose <span> Our Own </span> <br /> IT Service?
              </h2>
            </div>
            <ul>
              <li>
                <div class="icon">
                  <img src="/assets/img/choose_us/icon1.png" alt="" />
                </div>
                <div class="inf">
                  <h6> AI Intregrations </h6>
                  <p> Automatically syncs across all your devices </p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <img src="/assets/img/choose_us/icon2.png" alt="" />
                </div>
                <div class="inf">
                  <h6> On Demand Design </h6>
                  <p> Automatically syncs across all your devices </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/about/about_s4_wave.png" alt="" class="top-wave" />
    <img src="/assets/img/about/about_s4_wave.png" alt="" class="bottom-wave" />
    <img src="/assets/img/choose_us/choose7_circe.png" alt="" class="choose-circle rotate-center" />
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
