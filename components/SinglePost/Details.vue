<template>
  <div class="blog-details-slider mb-100">
    <div class="section-head text-center mb-60 style-5">
      <h2 class="mb-20 color-000">{{ details.title }}</h2>
      <small class="d-block date text">
        <a href="#" :class="`text-uppercase border-end brd-gray pe-3 me-3 color-blue${styleType} fw-bold`">{{ details.type }}</a>
        <i class="bi bi-clock me-1"></i>
        <span class="op-8 ms-1">{{ rtl ? 'تم النشر' : 'Posted on' }} {{ details.time }}</span>
      </small>
    </div>
    <div class="content-card">
      <div class="img">
        <img src="/assets/img/blog/1.jpeg" alt="" />
      </div>
      <div class="info">
        <div class="row">
          <div class="col-lg-6">
            <div class="cont">
              <small class="date small mb-20"> <span class="text-uppercase border-end brd-gray pe-3 me-3"> News </span> <i class="far fa-clock me-1"></i> Posted on 3 Days ago </small>
              <h2 class="title">
                Solutions For Big Data Issue, Expert Perspective
              </h2>
              <p class="fs-12px mt-10 text-light text-info">If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected [...]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'styleType', 'details']
}
</script>
