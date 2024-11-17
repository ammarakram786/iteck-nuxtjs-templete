<template>
  <div class="col-lg-4">
    <div class="side-blog style-5 ps-lg-5 mt-5 mt-lg-0">
      <form action="contact.php" class="search-form mb-50" method="post">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ rtl ? 'بحث' : 'search' }}
        </h6>
        <div class="form-group position-relative">
          <input type="text" class="form-control rounded-pill" :placeholder='rtl ? "اكتب وارسل" : "Type and hit enter"' />
          <button class="search-btn border-0 bg-transparent"> <i class="fas fa-search"></i> </button>
        </div>
      </form>

      <div class="side-recent-post mb-50">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ rtl ? 'المنشورات الاخيرة' : 'recent post' }}
        </h6>
        <NuxtLink :to='rtl ? "/rtl-page-single-post" : "/page-single-post-5"' v-for="(post, index) in sidebarData.recentPosts" :key="index" :class="`post-card ${index !== sidebarData.recentPosts.length - 1 ? 'pb-3 mb-3 border-bottom brd-gray' : ''}`">
          <div class="img me-3">
            <img :src="post.image" alt="" />
          </div>
          <div class="inf">
            <h6>{{ post.title }}</h6>
            <p>{{ rtl ? 'إذا كانت هناك طريقة واحدة تعمل بها التكنولوجيا اللاسلكية' : 'If there’s one way that wireless technology has' }} [...]</p>
          </div>
        </NuxtLink>
      </div>

      <div class="side-categories mb-50">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ rtl ? 'التصنيفات' : 'categories' }}
        </h6>
        <a href="#" class="cat-item" v-for="(category, index) in sidebarData.categories" :key="index">
          <span>{{ category.title }}</span>
          <span>{{ category.count }}</span>
        </a>
      </div>

      <div class="side-newsletter mb-50">
        <h6 class="title mb-10 text-uppercase fw-normal">
          {{ rtl ? 'نشرة الاخبار' : 'newsletter' }}
        </h6>
        <div class="text">
          {{ rtl ? 'سجل الآن للحصول على آخر التحديثات الخاصة بالعروض الترويجية والقسائم.' : 'Register now to get latest updates on promotions & coupons.' }}
        </div>
        <form action="contact.php" class="form-subscribe" method="post">
          <div class="email-input d-flex align-items-center py-3 px-3 bg-white mt-3 radius-5">
            <span class="icon me-2 flex-shrink-0">
              <i class="far fa-envelope"></i>
            </span>
            <input type="text" placeholder="Email Address" class="border-0 bg-transparent fs-12px" />
          </div>
          <button :class="`btn bg-blue${styleType} sm-butn text-white hover-darkBlue w-100 mt-3 radius-5 py-3`">
            <span>{{ rtl ? 'أشترك' : 'Subscribe' }}</span>
          </button>
        </form>
      </div>

      <div class="side-share mb-50">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ rtl ? 'اجتماعي' : 'social' }}
        </h6>
        <a href="#" class="social-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-pinterest"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-goodreads-g"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>

      <div class="side-insta mb-50">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ rtl ? 'انستجرام' : 'our instagram' }}
        </h6>
        <div class="d-flex justify-content-between flex-wrap">
          <a
            :href="image" 
            class="insta-img img-cover" 
            data-fancybox="gallery" 
            v-for="(image, index) in sidebarData.instagram" :key="index"  
            @click="showGallery($event, index)"
          >
            <img :src="image" alt="" />
            <i class="fab fa-instagram icon"></i>
          </a>
        </div>
      </div>

      <div class="side-tags">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ rtl ? 'الكلمات الاكثر بحثا' : 'popular tags' }}
        </h6>
        <div class="content">
          <a href="#" v-for="(tag, index) in sidebarData.tags" :key="index" class="me-1">{{ tag }}</a>
        </div>
      </div>
    </div>
    <client-only>
      <LightGallery
        :images="gallery"
        :index="index"
        :disable-scroll="true"
        @close="closeGallery"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  props: ['sidebarData', 'rtl', 'styleType'],
  data() {
    return {
      index: null
    }
  },
  computed: {
    gallery() {
      return this.sidebarData.instagram.map(slide => ({ url: slide }))
    }
  },
  methods: {
    showGallery(e, i) {
      e.preventDefault();
      document.querySelector('main').style.zIndex = 100;
      this.index = i;
    },
    closeGallery() {
      this.index = null;
      document.querySelector('main').style.zIndex = 98;
    }
  }
}
</script>
