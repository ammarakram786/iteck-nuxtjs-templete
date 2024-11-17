<template>
  <section :class="`contact section-padding pt-${styleType === '4' ? '0':'50'} style-6`">
    <template v-if="styleType === '5'">
      <div class="section-head text-center mb-100 style-5">
        <h2 class="mb-20">{{ rtl ? 'يسعدنا' : 'Get In' }} <span>{{ rtl ? 'تواصلك' : 'Touch' }}</span> {{ rtl && 'معنا' }}</h2>
        <p>{{ rtl ? 'سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة' : 'We will contact again after receive your request in 24h' }}</p>
      </div>
      <div class="text-center mb-100">
        <h2 class="ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5">{{ contactInfoData.phone }}</h2>
        <h4 class="fw-normal mb-20 color-000">{{ contactInfoData.email }}</h4>
        <h4 class="fw-normal mb-10 color-000">{{ contactInfoData.address }}</h4>
      </div>
    </template>
    <div class="container">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <form action="contact.php" class="form" method="post" @submit="handleFormSubmit">
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
                    <input type="text" name="phone" class="form-control" :placeholder="rtl ? 'رقم الهاتف (اختياري)' : 'Phone Number (option)'" v-model="formData.phone" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="website" class="form-control" :placeholder="rtl ? 'رابط موقعك (اختيارى)' : 'Your Website (option)'" v-model="formData.website" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mb-20">
                    <select class="form-select" :value="rtl ? 'كيف يمكننا مساعدتك ؟' : 'How can we help you?'" name="option" @change="handleFormOptionChange">
                      <option value="how can we help">{{ rtl ? 'كيف يمكننا مساعدتك ؟' : 'How can we help you?' }}</option>
                      <option value="option 1">{{ rtl ? 'الاختيار الاول' : 'option 1' }}</option>
                      <option value="option 2">{{ rtl ? 'الاختيار الثاني' : 'option 2' }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea rows="10" name="message" class="form-control" :placeholder="rtl ? 'كيف يمكننا مساعدتك ؟' : 'How can we help you?'" v-model="formData.message"></textarea>
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
                  <input type="submit" :value="rtl ? 'ارسل طلبك' : 'Send Your Request'" :class="`btn rounded-pill ${styleType === '4' ? 'bg-blue4 text-white fs-12px' : 'blue5-3Dbutn hover-blue2 sm-butn'} fw-bold text-light`" />
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
import contactInfo from '../../data/Contact/form.json';
import contactInfoRTL from '../../data/Contact/form-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  computed: {
    contactInfoData() {
      return this.rtl ? contactInfoRTL : contactInfo;
    }
  },
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
