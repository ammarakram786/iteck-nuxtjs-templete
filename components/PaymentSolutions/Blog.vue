<template>
  <section class="blog section-padding style-14">
    <div class="container">
      <div class="section-head text-center mb-40">
        <p class="color-red1 text-uppercase fw-bold mb-10"> insights </p>
        <h2 class="fs-1"> Company Blog & Insights </h2>
      </div>
      <div class="content">
        <div class="row gx-5">
          <div class="col-lg-4" v-for="(blog, index) in blogs" :key="index">
            <div :class="`blog-item ${index !== blog.length - 1 ? 'mb-5 mb-lg-0' : ''}`">
              <div class="img img-cover">
                <img :src="blog.cover" alt="" />
              </div>
              <div class="info">
                <div class="date">
                  <a href="#" class="color-red1 text-uppercase"> {{ blog.author }} </a>
                  <a href="#" class="color-666 text-uppercase ps-3 ms-3 border-1 border-start">
                    <i class="fal fa-calendar-alt"></i> {{ blog.date }}
                  </a>
                </div>
                <h5> {{ blog.title }} </h5>
                <a href="#" class="more"> read more </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogs from '../../data/PaymentSolutions/blog.json';

export default {
  data() {
    return {
      blogs
    }
  },
}
</script>
