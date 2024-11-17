<template>
  <section class="contact section-padding border-bottom border-1 brd-gray style-6">
    <div class="container">
      <div class="section-head text-center mb-70 style-5">
        <h2 class="mb-20">{{ rtl ? 'احصل على ' : 'Ready To Start A' }} <span>{{ rtl ? 'استشارة مجانية' : 'Projects' }}</span> </h2>
        <p>{{ rtl ? 'سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة' : 'We will contact again after receive your request in 24h' }}</p>
      </div>
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <form action="contact.php" class="form" method="post" onSubmit={handleFormSubmit}>
              <p class="text-center text-danger fs-12px mb-30">{{ rtl ? 'الحقل اللذى يحتوى على هذة العلامة اجبارى *' : 'The field is required mark as *' }}</p>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="name" class="form-control" :placeholder="rtl ? 'الاسم' : 'Name'" v-model="formData.name" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="email" class="form-control" :placeholder="rtl ? 'البريد الالكترونى *' : 'Email Address *'" v-model="formData.email" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="phone" class="form-control" :placeholder="rtl ? 'رقم الهاتف (اختيارى)' : 'Phone Number (option)'"  v-model="formData.phone" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="website" class="form-control" :placeholder="rtl ? 'موقعك الالكترونى (اختيارى)' : 'Your Website (option)'"  v-model="formData.website" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mb-20">
                    <select class="form-select" name="option" :value="rtl ? 'كيف يمكننا مساعدتك ؟ ' : 'How can we help you?'" @change="handleFormOptionChange">
                      <option value="How can we help you?">{{ rtl ? 'كيف يمكننا مساعدتك ؟ ' : 'How can we help you?' }}</option>
                      <option value="option 1">{{ rtl ? 'الاختيار الاول' : 'option 1' }}</option>
                      <option value="option 2">{{ rtl ? 'الاختيار الثاني' : 'option 2' }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea rows="10" class="form-control" name="message" :placeholder="rtl ? 'كيف يمكننا مساعدتك ؟ ' : 'How can we help you?'" v-model="formData.message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <div class="form-check d-inline-flex mt-30 mb-30">
                    <input class="form-check-input me-2 mt-0" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label small" for="flexCheckDefault">
                      {{ rtl ? 'من خلال الإرسال ، أوافق على' : 'By submitting, i’m agreed to the' }} <a href="#" class="text-decoration-underline">{{ rtl ? 'الشروط و الاحكام' : 'Terms & Conditons' }}</a>
                    </label>
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <input type="submit" :value="rtl ? 'ارسل طلبك' : 'Send Your Request'" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light" />
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
        option: "",
        phone: "",
        website: "",
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
      formValues.append('phone', this.formData.phone);
      formValues.append('website', this.formData.website);
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
