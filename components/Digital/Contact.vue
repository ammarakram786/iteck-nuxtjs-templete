<template>
  <section class="contact section-padding bg-gradient style-1" data-scroll-index="7">
    <div class="container">
      <div class="section-head mb-60 text-center">
        <h6 class="text-white text-uppercase wow fadeInUp">contact us</h6>
        <h2 class="wow fadeInUp text-white">
          Request Free <span class="fw-normal">Consultancy</span>
        </h2>
      </div>
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="contact_info text-white">
              <p class="wow fadeInUp">Hotline 24/7</p>
              <h4 class="wow fadeInUp">{{ contactInfo.phone }}</h4>
              <ul>
                <li class="wow fadeInUp">
                  <strong>Address : </strong> {{ contactInfo.address }}
                </li>
                <li class="wow fadeInUp">
                  <strong>Email : </strong> {{ contactInfo.email }}
                </li>
                <li class="wow fadeInUp">
                  <strong>Fax : </strong> {{ contactInfo.fax }}
                </li>
                <li class="wow fadeInUp">
                  <strong>Work Hour : </strong> {{ contactInfo.workingHours }}
                </li>
              </ul>
              <a href="#" class="wow fadeInUp">get direction</a>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <form class="contact_form" action="contact.php" method="post" @submit="handleFormSubmit">
              <div class="row gx-3">
                <div class="col-lg-6">
                  <div class="form-group mb-3 wow fadeInUp">
                    <input type="text" name="name" class="form-control" placeholder="name *" v-model="formData.name" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-3 wow fadeInUp">
                    <input type="text" name="email" class="form-control" placeholder="Email Address *" v-model="formData.email" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mb-3 wow fadeInUp">
                    <select name="option" class="form-select" aria-label="Default select example" defaultValue="Your inquiry about" @change="handleFormOptionChange">
                      <option>Your inquiry about</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mb-3 wow fadeInUp">
                    <textarea class="form-control" name="message" rows="4" placeholder="Write your inquiry here" v-model="formData.message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-check mb-4 wow fadeInUp">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label text-light small" htmlFor="flexCheckDefault">
                      By submitting, i’m agreed to the <a href="#" class="text-decoration-underline">Terms & Conditons</a>
                    </label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <input type="submit" value="Request Now" class="btn btn-dark wow fadeInUp text-light fs-14px" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/contact_globe.svg" alt="" class="contact_globe" />
  </section>
</template>

<script>
import contactInfo from '../../data/Digital/contact.json';

export default {
  data() {
    return {
      contactInfo,
      formData: {
        name: "",
        email: "",
        option: "",
        message: ""
      }
    }
  },
  methods: {
    handleFormOptionChange(e) {
      this.formData.option = e.target.value
    },
    async handleFormSubmit(e)  {
      e.preventDefault();
      const formValues = new FormData();

      formValues.append('name', this.formData.name);
      formValues.append('email', this.formData.email);
      formValues.append('option', this.formData.option);
      formValues.append('message', this.formData.message);
      
      const res = await fetch('/contact.php', {
        method: 'POST',
        body: formValues
      })
        .catch(err => alert(err.message));
        

      if (!res.ok) return;

      alert('Form submitted successfully.')
    }
  }
}
</script>
