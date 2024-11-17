<template>
  <section class="ser-details section-padding overflow-hidden">
    <div class="container">
      <div class="content">
        <div class="row gx-5">
          <DetailsContent />
          <SideLinks />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DetailsContent from './DetailsContent';
import SideLinks from './SideLinks';

export default {
  components: {
    DetailsContent,
    SideLinks
  }
}
</script>