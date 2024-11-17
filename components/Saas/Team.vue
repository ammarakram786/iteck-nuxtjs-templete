<template>
  <section class="team section-padding style-6">
    <div class="content">
      <div class="container">
        <div class="section-head text-center mb-70 style-5">
          <h2 class="mb-20">{{ rtl ? 'افضل' : 'Our' }} <span>{{ rtl ? 'المديرين' : 'Leaders' }}</span> </h2>
          <p>{{ rtl ? 'المهنية والودية شعارنا. تعرف على قادتنا' : 'Profressional & Friendly is our slogan. Meet our leaders' }}</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="(member, index) in teamData" :key="index">
            <div :class="`team-card ${index !== teamData.length - 1 ? 'mb-30 mb-lg-0':''} style-6`">
              <div class="img img-cover">
                <img :src="member.picture" alt="" />
                <div class="social-icons">
                  <a href="#" class="me-1">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="me-1">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="me-1">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div class="info">
                <a class="d-block" href="#"><h6>{{ member.name }}</h6></a>
                <small>{{ member.position }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import teamMembers from '../../data/Saas/team.json';
import teamMembersRTL from '../../data/Saas/team-rtl.json';

export default {
  props: ['rtl'],
  computed: {
    teamData() {
      return this.rtl ? teamMembersRTL : teamMembers
    }
  }
}
</script>
