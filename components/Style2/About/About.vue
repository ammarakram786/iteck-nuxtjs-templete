<template>
  <section class="about style-2 section-padding">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="img img-cover">
            <img src="/assets/img/about/about2.png" alt="" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="info px-lg-5">
            <div class="section-head style-5 mb-40">
              <h2 class="mb-20"> Work For Your <span> Incredible Success </span> </h2>
            </div>
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation" v-for="(item, index) in tabs.tablist" :key="item.id">
                <button :class="`nav-link ${index === 0 ? 'active' : ''}`" :id="item.id" data-bs-toggle="pill" :data-bs-target="'#' + item.tab_id" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                  {{ item.text }}
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div :class="`tab-pane fade ${index === 0 ? 'show active' : ''}`" v-for="(panel, index) in tabs.tabpanels" :key="panel.id" :id="panel.id" role="tabpanel">
                <p class="text"> {{ panel.text }} </p>
                <div class="d-flex align-items-center mt-40">
                  <div class="btns">
                    <a href="#" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
                      <span> Learn More </span>
                    </a>
                  </div>
                  <div class="inf ms-3">
                    <p class="color-999"> Support Email </p>
                    <a href="#" class="fw-bold color-000"> info@webmail.com </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/about/about2_pattern_l.png" alt="" class="pattern_l" />
    <img src="/assets/img/about/about2_pattern_r.png" alt="" class="pattern_r" />
  </section>
</template>

<script>
import tabs from '../../../data/Style2/about.json';

export default {
  data() {
    return {
      tabs
    }
  },
}
</script>
