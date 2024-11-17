<template>
  <section class="blog style-8 bg-gray2">
    <div class="container">
      <div class="content section-padding wow fadeInUp">
        <div class="section-head text-center style-8 mb-80">
          <h6> NEWS & INSIGHTS </h6>
          <h3> our News & Insights </h3>
        </div>
        <div class="blog-content">
          <div class="row">
            <div class="col-lg-6">
              <div class="main-post wow fadeInUp">
                <div class="img img-cover">
                  <img :src="blogs[0].cover" alt="" />
                  <div class="tags">
                    <a href="#"> {{ blogs[0].tag }} </a>
                  </div>
                </div>
                <div class="info pt-30">
                  <div class="date-author">
                    <a href="#" class="date">
                      {{ blogs[0].date }}
                    </a>
                    <span class="color-999 mx-3"> | </span>
                    <a href="#" class="author color-999">
                      By <span class="color-000 fw-bold"> {{ blogs[0].author }} </span>
                    </a>
                  </div>
                  <h4 class="title">
                    <a href="#"> {{ blogs[0].title }} </a>
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="side-posts">
                <template v-for="(blog, index) in blogs">
                  <div v-if="index > 0" class="item wow fadeInUp" :key="index">
                    <div class="img img-cover">
                      <img :src="blog.cover" alt="" />
                    </div>
                    <div class="info">
                      <div class="date-author">
                        <a href="#" class="date">
                          {{ blog.date }}
                        </a>
                        <span class="color-999 mx-3"> | </span>
                        <a href="#" class="author color-999">
                          By <span class="color-000 fw-bold"> {{ blog.author }} </span>
                        </a>
                      </div>
                      <h4 class="title">
                        <a href="#"> {{ blog.title }} </a>
                      </h4>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogs from '../../data/DataAnalysis/blog.json'

export default {
  data() {
    return {
      blogs
    }
  },
}
</script>
