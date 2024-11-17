<template>
  <section class="career-form section-padding" ref="numbersSectionRef">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="form-numbers">
            <h2> Looking For Oppertunity </h2>
            <p> More than 15,000 companies trust and choose Itech </p>
            <div class="career-numbers mt-50">
              <div class="row gx-5">
                <div class="col-5">
                  <div class="mum-card">
                    <h3> <countTo class="counter" :startVal="0" :endVal="5000" :duration="1500" ref="counter4" /> </h3>
                    <small> Project Completed </small>
                  </div>
                </div>
                <div class="col-5">
                  <div class="mum-card">
                    <h3> <countTo class="counter" :startVal="0" :endVal="1" :duration="1500" ref="counter3" /> M+ </h3>
                    <small> Happy Users </small>
                  </div>
                </div>
                <div class="col-5">
                  <div class="mum-card">
                    <h3> <countTo class="counter" :startVal="0" :endVal="100" :duration="1500" ref="counter2" /> </h3>
                    <small> Team Members </small>
                  </div>
                </div>
                <div class="col-5">
                  <div class="mum-card">
                    <h3> <countTo class="counter" :startVal="0" :endVal="10" :duration="1500" ref="counter1" /> </h3>
                    <small> Offline Basement </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <form action="contact.php" class="form">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <input type="text" class="form-control" placeholder="Full Name" v-model="formData.fullname" />
                  <span class="icon"> <i class="fas fa-user"></i> </span>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <input type="text" class="form-control" placeholder="Email Adress" v-model="formData.email" />
                  <span class="icon"> <i class="fas fa-envelope"></i> </span>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <input type="text" class="form-control" placeholder="Phone Number" v-model="formData.phone" />
                  <span class="icon"> <i class="fas fa-phone"></i> </span>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4 upload-card">
                  <div class="form-control">
                    <span id="upload_text"> <i class="fas fa-cloud"></i> Upload CV</span>
                    <input type="file" class="upload_input" />
                  </div>

                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <textarea rows="7" class="form-control" placeholder="Cover letter"  v-model="formData.coverletter"></textarea>
                  <span class="icon"> <i class="fas fa-pen"></i> </span>
                </div>
              </div>
            </div>
            <button class="btn bg-white sm-butn mt-4 rounded-3" @click="handleFormSubmit">
              <span class="text-dark"> Make Request <i class="fal fa-long-arrow-right ms-2 color-blue5"></i> </span>
            </button>
          </form>
        </div>
      </div>
    </div>
    <img src="/assets/img/careers/map.png" alt="" class="map_img" />
  </section>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  data() {
    return {
      formData: {
        fullname: "",
        email: "",
        phone: "",
        cv_file: {},
        coverletter: ""
      },
      position: { from: 2500, to: 3000 },
      restart: true
    }
  },
  components: {
    countTo
  },
  methods: {
    async handleFormSubmit(e)  {
      e.preventDefault();
      const formValues = new FormData();

      formValues.append('fullname', this.formData.name);
      formValues.append('email', this.formData.email);
      formValues.append('phone', this.formData.phone);
      formValues.append('cv_file', this.formData.cv_file);
      formValues.append('coverletter', this.formData.coverletter);
      
      const res = await fetch('/contact.php', {
        method: 'POST',
        body: formValues
      })
        .catch(err => alert(err.message));
        

      if (!res.ok) return;

      alert('Form submitted successfully.')
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (!this.position) return;

      const { from, to } = this.position;

      if (window.scrollY > from && window.scrollY < to && this.restart) {
        this.$refs.counter1.start();
        this.$refs.counter2.start();
        this.$refs.counter3.start();
        this.$refs.counter4.start();
        this.restart = false;
      }

      if (window.scrollY < from && !this.restart) {
        this.restart = true;
      }
    });
  },
}
</script>
