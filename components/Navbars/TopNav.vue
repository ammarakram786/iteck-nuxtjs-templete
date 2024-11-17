<template>
  <div :class="`top-navbar style-${styleType}`">
    <div class="container">
      <div class="content text-white">
        <span class="btn sm-butn bg-white py-0 px-2 me-2 fs-10px">
          <small class="fs-10px">{{rtl ? 'عرض خاص':'Special'}}</small>
        </span>
        <img src="/assets/img/icons/nav_icon/imoj_heart.png" alt="" class="icon-15 me-1" />
        <span class="fs-10px op-6 me-1">{{ rtl ? 'احصل على' : 'Get' }} </span>
        <small class="op-10 fs-10px">{{ rtl ? '20% خصم' : '20% Discount' }}</small>
        <span class="fs-10px op-6 mx-1">{{ rtl ? 'عند الاشتراك' : 'Get for New Account' }}</span>
        <NuxtLink to="/page-contact-5" class="fs-10px text-decoration-underline ms-2">
          {{ rtl ? 'اشترك الأن' : 'Register Now' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["styleType", "rtl"]
}
</script>
