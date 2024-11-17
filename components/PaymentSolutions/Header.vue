<template>
  <header class="style-14">
    <div class="container">
      <div class="content">
        <div class="row align-items-end">
          <div class="col-lg-5">
            <div class="info">
              <a href="https://youtu.be/pGbIOC83-So?t=21" class="vid_link" @click="openVideo">
                <span class="icon"> <i class="fas fa-play"></i> </span>
                <p> Explore Iteck </p>
              </a>
              <h1> Smart Banking One <span> Solutions </span> </h1>
              <div class="form-group">
                <span class="icon"> <i class="fas fa-envelope-open"></i> </span>
                <input type="text" class="form-control" placeholder="Business email" />
                <button class="btn rounded-pill text-white bg-red1 shadow-lg fw-bold" target="_blank">
                  <small> Signup For Free </small>
                </button>
              </div>
              <div class="down_store">
                <p class="fw-bold mb-3"> Available App </p>
                <div class="btns">
                  <a href="#" class="me-2"> <img src="/assets/img/header/head_14_btn_apple.png" alt="" />
                  </a>
                  <a href="#"> <img src="/assets/img/header/head_14_btn_android.png" alt="" /> </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="img">
              <img src="/assets/img/header/header_14_img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
