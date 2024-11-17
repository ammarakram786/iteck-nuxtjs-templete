<template>
  <section class="testim-curv section-padding">
    <div class="container-xxl">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="sec-head text-center mb-80">
            <h2 class="color-000 text-capitalize">Real people, real stories. Hear from <br /> our community.</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="testim-grida">
            <swiper :options="options">
              <swiper-slide v-for="(testimonial, i) in testimonials" :key="i">
                <div class="item">
                  <div class="icon-img icon-40">
                    <img src="/landing-preview/img/quotes.png" alt="" />
                  </div>
                  <div class="text mb-30">
                    <span class="rate-star fz-10 mb-10">
                      <i class="fas fa-star" v-for="_, s in Array(testimonial.stars).fill()" :key="s"></i>
                    </span>
                    <p>
                      <span v-if="testimonial.comment.includes('<br>')">
                        {{ testimonial.comment | commentOne }}
                        <br />
                        {{ testimonial.comment | commentTwo }}
                      </span>
                      <span v-else>{{ testimonial.comment }}</span>
                    </p>
                  </div>
                  <div class="cont d-flex">
                    <div class="img-flex valign">
                      <div class="img">
                        <img src="/landing-preview/img/envato.png" alt=""
                          class="circle-img" />
                      </div>
                    </div>
                    <div class="info valign ms-4">
                      <div>
                        <h6>{{ testimonial.author }}</h6>
                        <span class="text-u ls1 fz-12">For <span class="fw-700 gr-sunset-text">{{ testimonial.reason }}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import testimonials from '../../data/Preview/testimonials.json';

export default {
  data() {
    return {
      testimonials,
      options: {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: true,
        loop: true,
        autoplay: true,
        breakpoints: {
          1920: {
            slidesPerView: 3,
          },
          1028: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 1,
          }
        }
      }
    }
  },
  filters: {
    commentOne(value) {
      return value.split('<br>')[0];
    },
    commentTwo(value) {
      return value.split('<br>')[1];
    }
  }
}
</script>
