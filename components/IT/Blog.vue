<template>
  <section class="blog style-2 section-padding" data-scroll-index="7">
      <div class="container">
        <div class="section-head mb-30 text-center">
          <h2 class="text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70">editorial</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="content">
              <div class="row gx-5">
                <div class="col-lg-6 border-end brd-light">
                  <div class="card border-0 bg-transparent rounded-0 text-white mb-4 mb-lg-0">
                    <div class="img">
                      <img :src="firstBlog.cover" class="card-img-top" alt="..." />
                    </div>
                    <div class="card-body px-0">
                      <small class="d-block date text mt-2">
                        <a href="#" class="text-uppercase border-end brd-light pe-3 me-3">News</a>
                        <i class="bi bi-clock me-1"></i>
                        <a href="#" class="op-8">Posted on {{ firstBlog.time }}</a>
                      </small>
                      <h4 class="fw-normal text-white mt-2">
                        <NuxtLink to="/page-single-post-5">{{ firstBlog.title }}</NuxtLink>
                      </h4>
                      <p class="small mt-2 op-8">{{ firstBlog.short_desc }}</p>
                      <div
                        class="d-flex small mt-30 align-items-center justify-content-between op-9">
                        <div class="l_side d-flex align-items-center">
                          <span class="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2">
                            {{ firstBlog.placeholderImageText }}
                          </span>
                          <a href="#" class="mt-1">
                            By {{ firstBlog.author }}
                          </a>
                        </div>
                        <div class="r-side mt-1">
                          <i class="bi bi-chat-left-text me-1"></i>
                          <a href="#">{{ firstBlog.comments }}</a>
                          <i class="bi bi-eye ms-4 me-1"></i>
                          <a href="#">{{ firstBlog.views }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div :class="`card border-0 bg-transparent rounded-0 text-white ${index !== blogsList.length - 1 ? 'border-bottom brd-light pb-4 mb-4':''}`" v-for="(blog, index) in blogsList" :key="index">
                    <div class="row">
                      <div class="col-lg-5">
                        <div class="img h-100">
                          <img :src="blog.cover" class="w-100 h-100 radius-2" alt="..." />
                        </div>
                      </div>
                      <div class="col-lg-7">
                        <div class="card-body pt-3 pt-lg-0">
                          <small class="d-block date text">
                            <a href="#" class="text-uppercase border-end brd-light pe-3 me-3">News</a>
                            <i class="bi bi-clock me-1"></i>
                            <a href="#" class="op-8">{{ blog.time }}</a>
                          </small>
                          <h6 class="fw-normal text-white mt-2 fs-6"> <a href="#">{{ blog.title }}</a> </h6>
                          <div
                            class="d-flex small mt-20 align-items-center justify-content-between op-9">
                            <div class="l_side d-flex align-items-center">
                              <span class="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-2 me-2">
                                {{ blog.placeholderImageText }}
                              </span>
                              <a href="#" class="mt-1">
                                By {{ blog.author }}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a href="#" class="sm-butn btn border text-white radius-9 mt-80 hover-lightBlue border-lightBlue">
            <span>See More Articles</span>
          </a>
        </div>
      </div>
    </section>
</template>

<script>
import blogs from '../../data/IT/blog.json';

export default {
  data() {
    return {
      firstBlog: blogs[0],
      blogsList: blogs.slice(1)
    }
  },
}
</script>
