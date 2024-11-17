<template>
  <section class="blog style-8">
    <div class="container">
      <div class="content section-padding">
        <div class="section-head text-center mb-70 style-5">
          <h2 class="mb-20"> News & <span> Insights </span> </h2>
          <p>More than 15,000 companies trust and choose Itech</p>
        </div>
        <div class="blog-content">
          <div class="row">
            <div class="col-lg-6">
              <div class="main-post wow fadeInUp">
                <div class="img img-cover">
                  <img src="/assets/img/blog/18.jpg" alt="" />
                  <div class="tags">
                    <a href="#"> Analysis </a>
                  </div>
                </div>
                <div class="info pt-30">
                  <div class="date-author">
                    <a href="#" class="date">
                      Nov 21, 2022
                    </a>
                    <span class="color-999 mx-3"> | </span>
                    <a href="#" class="author color-999">
                      By <span class="color-000 fw-bold"> Admin </span>
                    </a>
                  </div>
                  <h4 class="title">
                    <a href="#"> Create Live Segments & Target The Right People For Your Amazing Team. </a>
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="side-posts">
                <div v-for="(blog, index) in blogs" :key="index" class="item wow fadeInUp" :data-wow-delay="`${index * 0.2}s`">
                  <div class="img img-cover">
                    <img :src="blog.image" alt="" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogs from '../../../data/Style2/blogs.json';

export default {
  data() {
    return {
      blogs
    }
  },
}
</script>