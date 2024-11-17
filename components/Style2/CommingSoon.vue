<template>
  <section class="comming-soon style-5">
    <div class="container">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="info">
              <div class="timing">
                <div class="item">
                  <h2 id="days"></h2>
                  <small> days </small>
                </div>
                <div class="item">
                  <h2 id="hours"></h2>
                  <small> Hours </small>
                </div>
                <div class="item">
                  <h2 id="minutes"></h2>
                  <small> Minute </small>
                </div>
                <div class="item">
                  <h2 id="seconds"></h2>
                  <small> Seconds </small>
                </div>
              </div>
              <h3> We Are Coming Very Soon </h3>
              <p> Perfect & awesome template to present your future website design. Hooking audience attention in the opener. </p>
              <div class="subscribe-form">
                <div class="form-group">
                  <span class="icon"> <i class="fas fa-envelope"></i> </span>
                  <input type="text" placeholder="Business email address" class="form-control" />
                  <button class="butn bg-blue5 rounded-pill py-3 text-white flex-shrink-0 border-0" type="submit"> <span> Subscribe Now <i class="fas fa-long-arrow-right ms-2"></i> </span> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/comming_man_shape.png" alt="" class="comming_man_shape slide_up_down" />
    <img src="/assets/img/comming_chat_shape.png" alt="" class="comming_chat_shape slide_up_down" />
    <img src="/assets/img/comming_light_shape.png" alt="" class="comming_light_shape slide_up_down" />
  </section>
</template>

<script>
import timer from '../../common/timer';

export default {
  mounted() {
    setTimeout(() => {
      let after7Days = new Date(Date.now() + 7 * 23 * 60 * 60 * 1000).toString().slice(4, 21);
      timer(after7Days);
    });
  },
}
</script>
