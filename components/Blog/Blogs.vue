<template>
  <div :class="isWide ? 'col-lg-10':'col-lg-8'">
    <div 
      :class="`card border-0 bg-transparent rounded-0 ${index !== blogs.length - 1 ? 'border-bottom brd-gray' : 'mb-lg-0 pb-lg-0'} pb-30 mb-30`"
      v-for="(blog, index) in blogs"
      :key="index"
    >
      <div class="row">
        <div class="col-lg-5">
          <div class="img img-cover">
            <img :src="blog.cover" class="radius-7" alt="..." />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="card-body p-0">
            <small class="d-block date text">
              <a href="#" :class="`text-uppercase border-end brd-gray pe-3 me-3 color-blue${styleType} fw-bold`">{{ blog.type }}</a>
              <i class="bi bi-clock me-1"></i>
              <a href="#" class="op-8">{{ blog.time }}</a>
            </small>
            <NuxtLink :to='rtl ? "/rtl-page-single-post" : "/page-single-post-5"' class="card-title mb-10">
              {{ blog.title }}
            </NuxtLink>
            <p class="fs-13px color-666">{{ blog.desc }} [...]</p>
            <div class="auther-comments d-flex small align-items-center justify-content-between op-9">
              <div class="l_side d-flex align-items-center">
                <span :class="`icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue${styleType} p-2 me-2 text-white`">
                  {{ blog.userImgLetter }}
                </span>
                <a href="#">
                  <small class="text-muted">{{ rtl ? 'بواسطة' : 'By' }}</small> {{ blog.username }}
                </a>
              </div>
              <div class="r-side mt-1">
                <i class="bi bi-chat-left-text me-1"></i>
                <a href="#">{{ blog.comments }}</a>
                <i class="bi bi-eye ms-4 me-1"></i>
                <a href="#">{{ blog.views }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div :class="`pagination style-5 color-${styleType} justify-content-center mt-60`">
      <a href="#" class="active">
        <span>1</span>
      </a>
      <a href="#">
        <span>2</span>
      </a>
      <a href="#">
        <span>3</span>
      </a>
      <a href="#">
        <span>4</span>
      </a>
      <a href="#">
        <span>...</span>
      </a>
      <a href="#">
        <span>20</span>
      </a>
      <a href="#">
        <span class="text">{{ rtl ? "التالي" : "next" }} <i class="fas fa-chevron-right"></i> </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'styleType', 'isWide', 'blogs']
}
</script>
