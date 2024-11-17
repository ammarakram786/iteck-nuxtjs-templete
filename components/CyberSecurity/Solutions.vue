<template>
  <section class="solutions style-10 section-padding bg-light">
    <div class="container">
      <div class="text-center mb-40">
        <p class="color-blue7 mb-10"> Our Level </p>
        <h2> Explore Solutions By Industry </h2>
      </div>
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-sm-6" v-for="(solution, idx) in solutions" :key="idx">
            <a href="#" class="solution-card">
              <h6> {{ solution.title }} </h6>
              <span class="icon"> <img :src="solution.image" alt="" /> </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import solutions from '../../data/CyberSecurity/solutions.json';

export default {
  data() {
    return {
      solutions
    }
  },
}
</script>
