<template>
  <section class="testimonials style-4 pt-70" data-scroll-index="5">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-lg-5">
            <div class="section-head style-4">
              <small class="title_small">{{ rtl ? 'اراء العملاء' : 'Testimonials' }}</small>
              <h2 class="mb-30">{{ rtl ? 'محبوب من' : 'Loved From' }} <span>{{ rtl ? 'العملاء' : 'Customers' }}</span></h2>
            </div>
            <p class="text mb-40">
              {{ rtl ? 'أحب نوتيرو من آلاف العملاء في جميع أنحاء العالم وحصل على الثقة من الشركات الكبرى.' : 'Notero loved from thoudsands customer worldwide and get trusted from big companies.' }}
            </p>
            <div class="numbs">
              <div class="num-card" v-for="(card, index) in data.numCards" :key="index">
                <div class="icon img-contain">
                  <img :src="card.image" alt="" />
                </div>
                <h2>{{ card.value }}</h2>
                <div class="stars" v-if="card.stars">
                  <i class="fas fa-star" v-for="_, i in Array(card.stars).fill()" :key="i"></i>
                </div>
                <p>
                  <span v-if="typeof card.type === 'string'">{{ card.type }}</span>
                  <span v-else>{{ card.type.text1 }} <br /> {{ card.type.text2 }}</span>
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center mt-70">
              <a href="https://www.apple.com/app-store" rel="noreferrer" class="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
                <small> {{ rtl ? 'انظر التعليقات على متجر التطبيقات' : 'See Reviews On App Store' }}</small>
              </a>
              <a href="https://youtu.be/pGbIOC83-So?t=21" class="play-btn" @click="openVideo">
                <span class="icon me-2">
                  <i class="fas fa-play ms-1"></i>
                </span>
                <strong class="small">{{ rtl ? 'مشاهده' : 'View' }} <br />{{ rtl ? 'البرومو' : 'Promotion' }}</strong>
              </a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="testi-cards">
              <div class="client_card" v-for="(card, index) in data.testiCards" :key="index">
                <div class="user_img">
                  <img :src="card.userImg" alt="" />
                </div>
                <div class="inf_content">
                  <div class="stars mb-2">
                    <i class="fas fa-star" v-for="_, i in Array(card.stars).fill()" :key="i"></i>
                  </div>
                  <h6>
                    <span v-if="typeof card.title === 'string'">{{ card.title }}</span>
                    <span v-else>{{card.title.text1}} <br /> {{card.title.text2}}</span>
                  </h6>
                  <p>
                    {{ card.author.name }} 
                    <span class="text-muted"> /  {{ card.author.position }} {{ rtl ? 'في' : 'at' }} <span>{{ card.author.company }}</span> </span>
                  </p>
                </div>
              </div>
              <img src="/assets/img/contact_globe.svg" alt="" class="testi-globe" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalVideo channel="youtube" videoId="pGbIOC83-So" :isOpen.sync="videoIsOpen" />
  </section>
</template>

<script>
import testimonialsData from '../../data/App/testimonials.json';
import testimonialsDataRTL from '../../data/App/testimonials-rtl.json';

import ModalVideo from '../ModelVideo';

export default {
  props: ['rtl'],
  computed: {
    data() {
      return this.rtl ? testimonialsDataRTL : testimonialsData;
    }
  },
  data() {
    return {
      videoIsOpen: false
    }
  },
  components: {
    ModalVideo
  },
  methods: {
    openVideo(e) {
      e.preventDefault();
      this.videoIsOpen = !this.videoIsOpen
    }
  },
}
</script>
