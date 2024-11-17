<template>
  <header class="style-12">
    <div class="container">
      <div class="info">
        <h2> Discover </h2>
        <h2 class="line-title"> <span class="line-text"> & Get Super </span> <small> The Worlds Largest Digital
            Marketplace <br /> For Crypto Collectibles And Non-Fungible <br /> Tokens for worldwide. </small> </h2>
        <h2> Digital Assets </h2>
        <img src="/assets/img/icons/star2.png" alt="" class="star1 scale_up_down" />
        <img src="/assets/img/icons/star2.png" alt="" class="star2 scale_up_down" />
      </div>
    </div>
    <div class="imgs-content pt-30">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-sm-6 pt-150 col-6">
            <div class="main-img img-cover">
              <img src="/assets/img/header/header_12_2.png" alt="" />
              <div class="inf">
                <h6> Cyber CloneX </h6>
                <p> <span class="color-999"> Floor: </span> 1.2 ETH </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-last order-lg-0">
            <div class="vid-info">
              <div class="icon-content">
                <div class="icon">
                  <img src="/assets/img/icons/star3.png" alt="" />
                </div>
              </div>
              <div class="img-vid-content mb-5 mb-lg-0">
                <p> How it Works </p>
                <div class="img-line">
                  <img src="/assets/img/header/header_12_linearrow.png" alt="" />
                </div>
                <div class="img-vid img-cover">
                  <img src="/assets/img/header/header_12_3.png" alt="" />
                  <a href="https://youtu.be/pGbIOC83-So?t=21" class="vid_icon icon-60 img-cover rounded-circle"
                    @click="openVideo">
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-6">
            <div class="main-img img-cover">
              <img src="/assets/img/header/header_12_1.png" alt="" />
              <div class="inf">
                <h6> Alex Pablo </h6>
                <p> <span class="color-999"> Floor: </span> 0.9 ETH </p>
              </div>
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
