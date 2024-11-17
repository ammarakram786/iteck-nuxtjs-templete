<template>
  <section class="team section-padding pt-0 style-1">
    <div class="container">
      <div class="section-head mb-60 text-center">
        <h6 class="color-main text-uppercase wow fadeInUp">meet our expert</h6>
        <h2 class="wow fadeInUp">
          Clients Satisfaction, <span class="fw-normal">Our Reputation</span>
        </h2>
      </div>
      <div class="content">
        <div class="team_box wow fadeInUp" v-for="(member, index) in teamMembers" :data-wow-delay='index * 0.2 + "s"' :key="index">
          <div class="avatar">
            <img :src="member.picture" alt="" />
          </div>
          <div class="info">
            <h6><a href="#">{{ member.name }}</a></h6>
            <small>{{ member.position }}</small>
            <div class="social_icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bttns mt-4 text-center">
        <NuxtLink to="/page-about-5" class="btn btn-dark wow zoomIn me-2">
          <span>See All Team</span>
        </NuxtLink>
        <NuxtLink to="/page-contact-5" class="btn butn-gard border-0 text-white wow zoomIn">
          <span>Join Our Team</span>
        </NuxtLink>
      </div>
    </div>
    <img src="/assets/img/team/team_shap.png" alt="" class="team_shap" />
  </section>
</template>

<script>
import teamMembers from '../../data/Digital/team.json'

export default {
  data() {
    return {
      teamMembers
    }
  },
}
</script>
