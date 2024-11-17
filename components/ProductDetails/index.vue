<template>
  <section class="product-details pt-100">
    <div class="container">
      <ul class="nav nav-pills" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation" v-for="(nav, i) in detailsData.nav_pills" :key="i">
          <button :class="`nav-link ${i === 0 ? 'active':''}`" :id="`${nav.id}-tab`" data-bs-toggle="pill" :data-bs-target="`#${nav.id}`" type="button" role="tab" :aria-controls="nav.id" aria-selected="true" @click="openTab(nav.id)">{{ nav.title }}</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <transition>
          <div class="tab-pane show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab" v-if="tabs[0].show">
            <div class="content-info text-center pb-0">
              <div class="text mb-30">
                {{
                  rtl ?
                  'عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.'
                  :
                  'Nulla velit turpis, tincidunt eget elit vitae, congue sodales metus. Sed sed neque luctus, sollicitudin sem sed, consectetur libero. Nunc mollis turpis velit, vitae laoreet sapien vehicula nec. Curabitur blandit ac libero eu dictum. Nullam vehicula hendrerit nisl eu laoreet. Cras non velit est. Vivamus tincidunt lacus est, at auctor elit finibus et. Maecenas a consequat metus. Aliquam ac nisl nec est mollis faucibus eget vitae eros. Duis bibendum vestibulum felis id mattis.'
                }}
              </div>
              <div class="text">
                {{
                  rtl ?
                  'عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.'
                  :
                  'Suspendisse metus sapien, lacinia eu lectus sit amet, consequat mollis felis. Mauris convallis augue quis semper venenatis. Vivamus imperdiet leo at neque efficitur, id faucibus arcu eleifend. Vivamus in massa bibendum, aliquet est quis, ornare lacus.'
                }}
              </div>
            </div>
          </div>
        </transition>
        <transition>
          <div class="tab-pane show active" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" v-if="tabs[1].show">
            <div class="product-reviews pt-30">
              <div class="row gx-5">
                <div class="col-lg-7">
                  <div class="reviews-content pt-30">
                    <h5 class="color-000 mb-40 text-capitalize"> {{ rtl ? 'المراجعات 02' : '02 reviews' }} </h5>
                    <div class="comment-replay-cont bg-light py-5 px-4 mb-20">
                      <div class="d-flex comment-cont">
                        <div class="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                          <img src="/assets/img/team/2.jpeg" alt="" />
                        </div>
                        <div class="inf">
                          <div class="title d-flex justify-content-between">
                            <h6 class="fw-bold fs-14px">{{ rtl ? 'روبوتات داونى' : 'Robert Downey Jr' }}</h6>
                            <div class="time fs-12px text-uppercase d-inline-block">
                              <div class="rate">
                                <div class="stars">
                                  <i class="fas fa-star active"></i>
                                  <i class="fas fa-star active"></i>
                                  <i class="fas fa-star active"></i>
                                  <i class="fas fa-star active"></i>
                                  <i class="fas fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="text color-000 fs-12px mt-10">
                            {{ rtl ? 'عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria' }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="comment-replay-cont bg-light py-5 px-4 mb-20">
                      <div class="d-flex comment-cont">
                        <div class="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                          <img src="/assets/img/team/4.jpeg" alt="" />
                        </div>
                        <div class="inf">
                          <div class="title d-flex justify-content-between">
                            <h6 class="fw-bold fs-14px">{{ rtl ? 'بين كويل' : 'Ben Chiwell' }}</h6>
                            <div class="time fs-12px text-uppercase">
                              <div class="rate">
                                <div class="stars">
                                  <i class="fas fa-star active"></i>
                                  <i class="fas fa-star active"></i>
                                  <i class="fas fa-star active"></i>
                                  <i class="fas fa-star active"></i>
                                  <i class="fas fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="text color-000 fs-12px mt-10">
                            {{ rtl ? 'عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria' }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <form class="comment-form d-block pt-30">
                    <h5 class="color-000 mb-40 text-capitalize"> {{ rtl ? 'اضافة تعليق' : 'Add a review' }} </h5>
                    <div class="row">
                      <div class="col-lg-12">
                        <label class="text-uppercase mb-1">
                          {{ rtl ? 'تقييمك' : 'your rating' }}
                        </label>
                        <div class="rate-stars">
                          <input type="radio" name="star" defaultValue="5" />
                          <input type="radio" name="star" defaultValue="4" />
                          <input type="radio" name="star" defaultValue="3" />
                          <input type="radio" name="star" defaultValue="2" />
                          <input type="radio" name="star" defaultValue="1" />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group mb-30">
                          <textarea class="form-control radius-4 fs-12px p-3" rows="6" :placeholder="rtl ? 'أكتب تعليقك هنا' : 'Write your comment here'"></textarea>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group mb-4 mb-lg-0">
                          <input type="text" class="form-control fs-12px radius-4 p-3" name="name" :placeholder="rtl ? 'اسمك *' : 'Your Name *'" />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input type="text" class="form-control fs-12px radius-4 p-3" name="email" :placeholder="rtl ? 'بريدك الالكتروني *' : 'Your Email *'" />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-check mt-20">
                          <input class="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                          <label class="form-check-label fs-12px" for="flexCheckDefault">
                            {{ rtl ? 'احفظ اسمي والبريد الإلكتروني في هذا المتصفح لاستخدامها المرة المقبلة في تعليقي' : 'Save my name & email in this browser for next time I comment' }}
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <a href="#" :class="`btn rounded-pill bg-blue${styleType} fw-bold text-white mt-4`" target="_blank">
                          <small> {{ rtl ? 'إرسال تعليق' : 'Submit Comment' }} </small>
                        </a>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <transition>
          <div class="tab-pane show active" id="pills-information" role="tabpanel" aria-labelledby="pills-information-tab" v-if="tabs[2].show">
            <div class="content-info pb-0">
              <div class="additional-info">
                <ul>
                  <li>
                    <strong>{{ rtl ? 'الوزن' : 'Weight' }}</strong>
                    <span> 0.6 kg </span>
                  </li>
                  <li>
                    <strong>{{ rtl ? 'الابعاد' : 'Dimensions' }}</strong>
                    <span> 40 × 30 × 30 cm </span>
                  </li>
                  <li>
                    <strong>{{ rtl ? 'اللون' : 'Color' }}</strong>
                    <span> White, Black, Red </span>
                  </li>
                  <li>
                    <strong>{{ rtl ? 'السنة' : 'Year' }}</strong>
                    <span> 2021 </span>
                  </li>
                  <li>
                    <strong>{{ rtl ? 'الشكل' : 'Style' }}</strong>
                    <span> {{ rtl ? 'كلاسيك' : 'Classic, Modern' }} </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import productDetails from '../../data/App/product-details.json';
import productDetailsRTL from '../../data/App/product-details-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  computed: {
    detailsData() {
      return this.rtl ? productDetailsRTL : productDetails
    }
  },
  data() {
    return {
      tabs: this.rtl ? productDetailsRTL.nav_tabs : productDetails.nav_tabs
    }
  },
  methods: {
    openTab(tabId) {
      // Remove class 'current' from all tab-links
      document.querySelectorAll(`.product-details .nav-link`).forEach(el => el.classList.remove('active'));
      // Add class 'current' to clicked tab-link
      document.querySelector(`.product-details .nav-link[id="${tabId}-tab"]`).classList.add('active');

      // Close all tabs and open tab with id == tabId
      let newTabs = structuredClone(this.tabs);

      let newContents = newTabs.map(tab => {
        tab.show = false;
        return tab;
      });

      let idx = newContents.findIndex(tab => tab.id === tabId);

      newContents[idx].show = true;

      newTabs = newContents;

      this.tabs = newTabs;
    }
  }
}
</script>
