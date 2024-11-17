<template>
  <section class="testimonials section-padding style-1" data-scroll-index="5">
    <div class="container">
      <div class="section-head mb-60 text-center">
        <h6 class="color-main text-uppercase wow fadeInUp">testimonials</h6>
        <h2 class="wow fadeInUp">
          The Trust <span class="fw-normal">From Clients</span>
        </h2>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-5">
            <div class="vid_img mb-2 mb-md-0 wow zoomIn slow">
              <img src="/assets/img/testimonials/testi.jpeg" alt="" />
              <a href="https://youtu.be/pGbIOC83-So?t=21" class="play_icon" @click="openVideo">
                <i class="bi bi-play"></i>
              </a>
              <div class="img_info wow fadeInUp">
                <h4><a href="#">Casper Defloy</a></h4>
                <small><a href="#">Tech Leader at Esty Inc</a></small>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="info wow fadeInUp">
              <div :class="`client_card ${index !== testimonials.length - 1 ? 'mb-2':''}`" :data-wow-delay='index * 0.2 + "s"' v-for="(testimonial, index) in testimonials" :key="index">
                <div class="user_img">
                  <img :src="testimonial.userImg" alt="" />
                </div>
                <div class="inf_content">
                  <div class="rate_stars">
                    <i v-for="(_,i) in Array(testimonial.stars).fill()" :key="i" class="bi bi-star-fill"></i>
                  </div>
                  <h6>
                    “{{ testimonial.comment }}”
                  </h6>
                  <p>{{ testimonial.username }}  <span class="text-muted">/  {{ testimonial.position }}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalVideo channel="youtube" videoId="pGbIOC83-So" :isOpen.sync="videoIsOpen" />
  </section>
</template>

<script>
import testimonials from '../../data/Digital/testimonials.json'
import ModalVideo from '../ModelVideo';

export default {
  components: {
    ModalVideo
  },
  data() {
    return {
      testimonials,
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
