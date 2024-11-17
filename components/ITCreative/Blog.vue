<template>
  <section class="blog style-7 section-padding">
    <div class="container">
      <div class="section-head text-center style-4 mb-80">
        <div class="top-title mb-10">
          <img src="/assets/img/line_l.png" alt="" />
          <h5> blog </h5>
          <img src="/assets/img/line_r.png" alt="" />
        </div>
        <h2 class="">
          Company <span> News & Insights </span>
        </h2>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-4" v-for="(blog, index) in blogs" :key="index">
            <div class="blog-card style-7 mt-5 mt-lg-0">
              <div class="img img-cover">
                <img :src="blog.cover" alt="" />
              </div>
              <div class="info pt-40">
                <div class="date-tags">
                  <div class="tags">
                    <NuxtLink to="/page-blog-app">{{ blog.category }}</NuxtLink>
                  </div>
                  <a href="#" class="date">
                    {{ blog.date }}
                  </a>
                  <span class="color-999"> | </span>
                  <a href="#" class="author color-999">
                    By <span class="color-000 fw-bold"> {{ blog.author }} </span>
                  </a>
                </div>
                <h4 class="title">
                  <NuxtLink to="/page-single-post-app">{{ blog.title }}</NuxtLink>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/shap_color_7.png" alt="" class="shap_color" />
  </section>
</template>

<script>
import blogs from '../../data/ITCreative/blog.json';

export default {
  data() {
    return {
      blogs
    }
  },
}
</script>
