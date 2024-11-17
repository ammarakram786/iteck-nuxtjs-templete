<template>
  <section class="team section-padding style-6" data-scroll-index="7">
    <div class="content">
      <div class="container">
        <div class="row items align-items-end mb-50">
          <div class="col-lg-7">
            <div class="section-head mb-0 style-6">
              <h2 class="mb-0" v-if="rtl">افضل <span><small>المديرين</small></span></h2>
              <h2 class="mb-0" v-else>Our <span><small>Leaders</small></span></h2>
            </div>
          </div>
          <div class="col-lg-5 text-end">
            <a class="text-decoration-underline text-uppercase mb-4" href="#" v-if="rtl">مشاهدة الفريق بالكامل</a>
            <a class="text-decoration-underline text-uppercase mb-4" href="#" v-else>See All our team</a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="(member, index) in TeamMembers" :key="index">
            <div class="team-card mb-30 mb-lg-0 style-6">
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
import teamMembers from '../../data/Startup/team.json'
import teamMembersRTL from '../../data/Startup/team-rtl.json'

export default {
  props: ['rtl'],
  computed: {
    TeamMembers() {
      return this.rtl ? teamMembersRTL : teamMembers;
    }
  }
}
</script>
