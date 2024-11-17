<template>
  <section class="faq style-10 bg-light pt-100">
    <div class="container">
      <div class="mb-70">
        <div class="row">
          <div class="col-lg-8">
            <p class="color-blue7 mb-10"> FAQ </p>
            <h2> Freequently Asked Question </h2>
          </div>
          <div class="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <a href="#0" class="btn btn-icon-circle rounded-pill fw-bold brd-gray hover-orange2">
              <small> More Question <i class="fas fa-long-arrow-alt-right bg-blue7 text-white"></i> </small>
            </a>
          </div>
        </div>
      </div>
      <div class="content overflow-hidden">
        <div class="row gx-5">
          <div class="col-lg-8">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item" v-for="(faq, idx) in faqs" :key="idx">
                <h2 class="accordion-header" :id="`hd${idx}`">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    :data-bs-target="`#cl${idx}`" aria-expanded="true" aria-controls="collapseOne">
                    {{ faq.question }}
                  </button>
                </h2>
                <div :id="`cl${idx}`" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>
                      {{ faq.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="faq-form mt-5 mt-lg-0">
              <h4> Ask More Question </h4>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your name" />
                <span class="icon"> <i class="fas fa-user"></i> </span>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Email address" />
                <span class="icon"> <i class="fas fa-envelope"></i> </span>
              </div>
              <div class="form-group">
                <textarea name="" id="" rows="5" class="form-control" placeholder="message"></textarea>
                <span class="icon"> <i class="fas fa-pen"></i> </span>
              </div>
              <button class="butn w-100 bg-blue7 text-white border-0 rounded-3"> <span> send message </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <IntegrationCard />
  </section>
</template>

<script>
import IntegrationCard from './IntegrationCard';
import faqs from '../../data/CyberSecurity/faq.json';

export default {
  data() {
    return {
      faqs
    }
  },
  components: {
    IntegrationCard
  }
}
</script>
