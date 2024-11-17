<template>
  <section class="contact section-padding style-6" data-scroll-index="9">
    <div class="container">
      <div class="section-head mb-60 style-6 text-center">
        <h2 class="mb-20" v-if="rtl"> احصل على <span><small>استشارة مجانية</small></span></h2>
        <h2 class="mb-20" v-else> Get free <span> <small> consultation </small> </span></h2>
        <p class="color-666" v-if="rtl">سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة</p>
        <p class="color-666" v-else>We will contact again after receive your request in 24h</p>
      </div>
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <form action="contact.php" class="form" method="post" @submit="handleFormSubmit">
              <p class="text-center text-danger fs-12px mb-30">{{ rtl ? "الحقل اللذى يحتوى على هذة العلامة اجبارى *" : "The field is required mark as *" }}</p>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="name" class="form-control" :placeholder='rtl ? "الأسم" : "Name"' v-model="formData.name" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="email" class="form-control" :placeholder='rtl ? "البريد الألكترونى *" : "Email Address *"' v-model="formData.email" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="phone" class="form-control" :placeholder='rtl ? "الهاتف (اختياري)" : "Phone Number (option)"' v-model="formData.phone" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="website" class="form-control" :placeholder='rtl ? "موقعك الالكترونى (اختياري)" : "Your Website (option)"' v-model="formData.website" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mb-20">
                    <select class="form-select" name="option" @change="handleFormOptionChange">
                      <option :value='rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"' selected>{{rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"}}</option>
                      <option :value='rtl ? "الاختيار الاول" : "option 1"'>{{rtl ? "الاختيار الاول" : "option 1"}}</option>
                      <option :value='rtl ? "الاختيار الثانى" : "option 2"'>{{rtl ? "الاختيار الثانى" : "option 2"}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea name="message" rows="10" class="form-control" :placeholder='rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"' v-model="formData.message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <div class="form-check d-inline-flex mt-30 mb-30">
                    <input class="form-check-input me-2 mt-0" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label small" for="flexCheckDefault">
                      {{rtl ? "من خلال الإرسال ، أوافق على" : "By submitting, i’m agreed to the"}} <a href="#" class="text-decoration-underline">{{rtl ? "الشروط و الاحكام" : "Terms & Conditons"}}</a>
                    </label>
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <input type="submit" :value='rtl ? "أرسل طلبك" : "Send Your Request"' class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <img src="/assets/img/icons/contact_a.png" alt="" class="contact_a" />
        <img src="/assets/img/icons/contact_message.png" alt="" class="contact_message" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['rtl'],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        website: "",
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
      formValues.append('phone', this.formData.phone);
      formValues.append('website', this.formData.website);
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
