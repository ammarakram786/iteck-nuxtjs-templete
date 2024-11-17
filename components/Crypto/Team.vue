<template>
  <section class="team style-15">
    <div class="row gx-0">
      <div class="col-lg-3 col-sm-6" v-for="(member, idx) in teamMemebers" :key="idx">
        <div class="team-card wow fadeInUp">
          <div class="img">
            <img :src="member.picture" alt="" />
          </div>
          <div class="info">
            <div class="social-icons">
              <a href="#"> <i class="fab fa-facebook-f"></i> </a>
              <a href="#"> <i class="fab fa-twitter"></i> </a>
              <a href="#"> <i class="fab fa-behance"></i> </a>
              <a href="#"> <i class="fab fa-youtube"></i> </a>
              <a href="#"> <i class="fab fa-linkedin"></i> </a>
            </div>
            <div class="inf">
              <p class="text-uppercase"> {{ member.position }} </p>
              <h5> {{ member.name }} </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import teamMemebers from '../../data/Crypto/team.json';

export default {
  data() {
    return {
      teamMemebers
    }
  },
}
</script>
