<template>
  <div :class="`blog-card ${isCenter ? 'card-center' : ''} style-6`">
    <NuxtLink to="rtl-page-single-post" class="img img-cover d-block" v-if="rtl">
      <img :src="blog.cover" alt="" />
    </NuxtLink>
    <NuxtLink to="/page-single-post-5" class="img img-cover d-block" v-else>
      <img :src="blog.cover" alt="" />
    </NuxtLink>
    <div class="info">
      <div class="date">
        <a href="#" class="small color-blue6 fs-12px pe-3 border-end brd-gray text-uppercase fw-bold me-3"> news </a>
        <small class="op-6 fs-12px" v-if="rtl"> <i class="far fa-clock"></i> تم النشر </small>
        <small class="op-6 fs-12px" v-else> <i class="far fa-clock"></i> Posted on </small>
        <a href="#" class="fs-12px ms-1">{{ blog.time }}</a>
      </div>
      <h4 class="blog-title">
        <NuxtLink to="rtl-page-single-post" v-if="rtl">{{ blog.title }}</NuxtLink>
        <NuxtLink to="/page-single-post-5" v-else>{{ blog.title }}</NuxtLink>
      </h4>
      <div class="text">
        {{ blog.short_desc }} [...]
      </div>
      <div class="d-flex small mt-20 align-items-center justify-content-between op-9">
        <div class="l_side d-flex align-items-center">
          <span class="icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue2 p-2 me-2  text-white">
            {{ blog.placeholderImageText }}
          </span>
          <a href="#">
            <small class="text-muted me-1" v-if="rtl">بواسطة</small> 
            <small class="text-muted me-1" v-else>By</small> 
            {{ blog.author }}
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
</template>

<script>
export default {
  props: ['rtl', 'blog', 'isCenter']
}
</script>
