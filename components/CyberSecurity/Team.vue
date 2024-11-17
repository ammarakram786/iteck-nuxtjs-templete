<template>
  <section class="team style-10 section-padding">
    <div class="container">
      <div class="mb-70 text-center">
        <p class="color-blue7 mb-10"> Our Team </p>
        <h2> Our Talent Expert </h2>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-4" v-for="(member, idx) in team" :key="idx">
            <div class="team-card">
              <div class="img">
                <img :src="member.picture" alt="" class="main-img" />
                <span :class="`bg_color bg-${idx === 1 ? 'blue7' : 'orange2'}`"></span>
                <div class="social-icons">
                  <span class="icon"> </span>
                  <div class="socials">
                    <a href="#"> <i class="fab fa-twitter"></i> </a>
                    <a href="#"> <i class="fab fa-facebook-f"></i> </a>
                    <a href="#"> <i class="fab fa-behance"></i> </a>
                    <a href="#"> <i class="fab fa-youtube"></i> </a>
                  </div>
                </div>
              </div>
              <div class="info">
                <p class="text-capitalize color-blue7"> {{ member.position }} </p>
                <h5> {{ member.name }} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import team from '../../data/CyberSecurity/team.json';

export default {
  data() {
    return {
      team
    }
  },
}
</script>
