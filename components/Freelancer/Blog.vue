<template>
  <section class="blog section-padding style-13">
    <div class="container">
      <div class="section-head text-center mb-50 style-13">
        <h6> news </h6>
        <h2> Blog & Insights </h2>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-4" v-for="(blog, idx) in blogs" :key="idx">
            <div class="blog-item">
              <div class="cont">
                <div class="tags">
                  <a href="#" v-for="(tag, i) in blog.tags" :key="i"> {{ tag }} </a>
                </div>
                <h5> <a href="#"> {{ blog.title }}... </a> </h5>
                <div class="author d-flex align-items-center">
                  <div class="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                    <img :src="blog.authorPic" alt="" />
                  </div>
                  <div class="inf">
                    <h6 class="fw-bold mb-1"> <a href="#"> {{ blog.authorName }} </a> </h6>
                    <p class=""> <span class="color-999"> Date: </span> <a href="#"> {{ blog.date }} </a> </p>
                  </div>
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
import blogs from '../../data/Freelancer/blog.json';

export default {
  data() {
    return {
      blogs
    }
  },
}
</script>
