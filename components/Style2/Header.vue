<template>
  <section class="inner-header style-5">
    <div class="container">
      <div class="content">
        <div class="links">
          <a href="#"> Home </a>
          <a href="#" class="ms-1"> {{ page }} </a>
        </div>
        <h2> {{ title }} </h2>
        <img src="/assets/img/header/head7_rock.png" alt="" class="side-img slide_up_down" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'page']
}
</script>
