<template>
  <div class="blog-comments mt-70">
    <div class="comment-card card p-5 radius-5 border-0 mt-50">
      <div class="d-flex">
        <div class="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
          <img :src="commentCard.user.picture" alt="" />
        </div>
        <div class="inf">
          <h6 class="fw-bold">{{ commentCard.user.name }}</h6>
          <small class="color-999">{{ commentCard.date }}</small>
          <div class="text color-000 fs-12px mt-10">
            {{ commentCard.text }}
          </div>
          <div class="social-icons d-flex mt-20">
            <a href="#" class="icon-25 rounded-circle d-inline-flex overflow-hidden align-items-center justify-content-center fs-10px me-2">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="icon-25 rounded-circle d-inline-flex overflow-hidden align-items-center justify-content-center fs-10px me-2">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="icon-25 rounded-circle d-inline-flex overflow-hidden align-items-center justify-content-center fs-10px me-2">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="comments-content mt-70">
      <h3 class="color-000 mb-0">
        <template v-if="comments.length < 10">
          0{{ comments.length }}
        </template>
        <template v-else>
          {{ comments.length }}
        </template>
      </h3>
      <div
        :class="`comment-replay-cont ${index !== comments.length - 1 ? 'border-bottom border-1 brd-gray':''} pb-40 pt-40`"
        v-for="(comment, index) in comments" 
        :key="index"
      >
        <div class="d-flex comment-cont">
          <div class="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
            <img :src="comment.user.picture" alt="" />
          </div>
          <div class="inf">
            <div class="title d-flex justify-content-between">
              <h6 class="fw-bold fs-14px">{{ comment.user.name }}</h6>
              <span class="time fs-12px text-uppercase">
                {{ comment.time }}
              </span>
            </div>
            <div class="text color-000 fs-12px mt-10">
              {{ comment.content }}
            </div>
            <a href="#" :class="`butn border border-1 rounded-pill border-blue${styleType} mt-20 py-2 px-3 hover-blue${styleType} color-blue${styleType}`">
              <span class="fs-10px">{{ rtl ? 'رد' : 'replay' }}</span>
            </a>
          </div>
        </div>
        <div
          class="d-flex comment-replay ps-5 mt-30 ms-4"
          v-for="(reply, i) in comment.replies" 
          :key="i"
        >
          <div class="icon-40 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
            <img :src="reply.user.picture" alt="" />
          </div>
          <div class="inf">
            <div class="title d-flex justify-content-between">
              <h6 class="fw-bold fs-14px">{{ reply.user.name }}</h6>
              <span class="time fs-12px text-uppercase">
                {{ reply.time }}
              </span>
            </div>
            <div class="text color-000 fs-12px mt-10">
              {{ reply.content }}
            </div>
            <a href="#" :class="`butn border border-1 rounded-pill border-blue${styleType} mt-20 py-2 px-3 hover-blue${styleType} color-blue${styleType}`">
              <span class="fs-10px">{{ rtl ? 'رد' : 'replay' }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <form class="comment-form d-block pt-30">
      <h3 class="color-000 mb-40"> {{ rtl ? 'اضافة تعليق' : 'Leave A Comment' }} </h3>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group mb-30">
            <textarea class="form-control radius-4 fs-12px p-3" rows="6" :placeholder='rtl ? "اكتب تعليقك هنا" : "Write your comment here"'></textarea>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group mb-4 mb-lg-0">
            <input type="text" class="form-control fs-12px radius-4 p-3" :placeholder='rtl ? "اسمك *" : "Your Name *"' />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <input type="text" class="form-control fs-12px radius-4 p-3" :placeholder='rtl ? "بريدك الالكترونى *" : "Your Email *"' />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-check mt-20">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label fs-12px" for="flexCheckDefault">
              {{ rtl ? 'احفظ اسمي والبريد الإلكتروني في هذا المتصفح لاستخدامها المرة المقبلة في تعليقي' : 'Save my name & email in this browser for next time I comment' }}
            </label>
          </div>
        </div>
        <div class="col-12">
          <a href="#" :class="`btn rounded-pill blue${styleType}-3Dbutn hover-blue4 sm-butn fw-bold mt-40`">
            <span>{{ rtl ? 'ارسال التعليق' : 'Submit Comment' }}</span>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'styleType', 'commentCard', 'comments']
}
</script>
