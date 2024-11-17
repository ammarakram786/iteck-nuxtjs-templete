<template>
  <a href="#" class="project-card style-7">
    <div class="info">
      <h6>{{ project.title }}</h6>
      <h3>{{ project.description }}</h3>
    </div>
    <div class="img">
      <img :src="project.image" alt="" />
    </div>
  </a>
</template>

<script>
export default {
  props: ['project']
}
</script>
