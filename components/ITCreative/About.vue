<template>
  <section class="about style-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="info">
            <div class="section-head style-4 mb-40">
              <div class="top-title mb-10">
                <img src="/assets/img/line_l.png" alt="" />
                <h5> About Us </h5>
              </div>
              <h2 class="">
                Meet With <span> A House </span> <br /> Of Creatives.
              </h2>
            </div>
            <div class="text mb-30">
              Stay focused and productive with a clean and clutter-free note space. The flexible ways to organize your notes: hash tags, nested notebooks, pinning notes.
            </div>
            <ul>
              <li class="d-flex mb-20" v-for="(item, index) in aboutData" :key="index">
                <i class="fas fa-check-circle color-blue7 me-2 mt-2"></i>
                <div class="text"> <strong class="color-000"> {{ item.title }}: </strong> {{ item.content }} </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="img">
            <img src="/assets/img/about/about7.jpg" alt="" class="main-img" />
            <img src="/assets/img/about/about7_chart.png" alt="" class="img-chart slide_up_down" />
            <span class="circle scale_up_down"></span>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/about/about_s4_wave.png" alt="" class="top-wave" />
    <img src="/assets/img/about/about_s4_wave.png" alt="" class="bottom-wave" />
    <img src="/assets/img/about/about7_lines.png" alt="" class="bg-lines" />
  </section>
</template>

<script>
import aboutData from '../../data/ITCreative/about.json';

export default {
  data() {
    return {
      aboutData
    }
  },
}
</script>
