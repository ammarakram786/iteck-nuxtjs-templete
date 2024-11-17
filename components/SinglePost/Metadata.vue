<template>
  <div class="d-flex small align-items-center justify-content-between mb-70 fs-12px">
    <div class="l_side d-flex align-items-center">
      <a href="#" class="me-3 me-lg-5">
        <span class="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
          {{ metadata.user.imgLetter }}
        </span>
        <span class="">
          {{ rtl ? 'بواسطة' : 'By' }} {{ metadata.user.name }}
        </span>
      </a>
      <a href="#" class="me-3 me-lg-5">
        <i class="bi bi-chat-left-text me-1"></i>
        <span>{{ metadata.commentsCount }} {{ rtl ? 'تعليقات' : 'Comments' }}</span>
      </a>
      <a href="#">
        <i class="bi bi-eye me-1"></i>
        <span>{{ metadata.viewsCount }} {{ rtl ? 'مشاهدات' : 'Views' }}</span>
      </a>
    </div>
    <div class="r-side mt-1">
      <a href="#">
        <i class="bi bi-info-circle me-1"></i>
        <span>{{ rtl ? 'تبليغ' : 'Report' }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl', 'metadata']
}
</script>
