<template>
  <section class="popular-posts pt-50 pb-100 border-bottom brd-gray">
    <div class="container">
      <h5 class="post-sc-title text-center text-uppercase mb-70">{{ rtl ? 'أخبار شائعة' : 'Popular Posts' }}</h5>
      <div class="row gx-5">
        <div :class="`col-lg-4 ${index !== postsData.length - 1 ? 'border-end brd-gray':''}`" v-for="(post, index) in postsData" :key="index">
          <div class="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
            <div class="img radius-7 overflow-hidden img-cover">
              <img :src="post.cover" class="card-img-top" alt="..." />
            </div>
            <div class="card-body px-0">
              <small class="d-block date mt-10 fs-10px fw-bold">
                <a href="#" :class="`text-uppercase border-end brd-gray pe-3 me-3 color-blue${styleType}`">{{ rtl ? 'أخبار' : 'News' }}</a>
                <i class="bi bi-clock me-1"></i>
                <a href="#" class="op-8">{{ rtl ? 'موعد النشر' : 'Posted on' }} {{ post.time }}</a>
              </small>
              <h5 class="fw-bold mt-10 title">
                <NuxtLink :to='rtl ? "/rtl-page-single-post" : "/page-single-post-5"'> 
                  {{ post.title }}
                </NuxtLink>
              </h5>
              <p class="small mt-2 op-8 fs-10px">{{ post.desc }} [...]
              </p>
              <div class="d-flex small mt-20 align-items-center justify-content-between op-9">
                <div class="l_side d-flex align-items-center">
                  <span class="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                    {{ post.userImgLetter }}
                  </span>
                  <a href="#" class="mt-1">
                    {{ rtl ? 'بواسطة' : 'By' }} {{ post.username }}
                  </a>
                </div>
                <div class="r-side mt-1">
                  <i class="bi bi-chat-left-text me-1"></i>
                  <a href="#">{{ post.comments }}</a>
                  <i class="bi bi-eye ms-4 me-1"></i>
                  <a href="#">{{ post.views }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import posts from '../../data/Blog/popular-posts.json';
import postsRTL from '../../data/Blog/popular-posts-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  computed: {
    postsData() {
      return this.rtl ? postsRTL : posts;
    }
  }
}
</script>
