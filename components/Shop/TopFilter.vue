<template>
  <div class="top-filter mb-10">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <p class="color-999 fs-12px mb-3 mb-lg-0"> <span class="color-000">1 - 40</span> of 1,652 results</p>
      </div>
      <div class="col-lg-6">
        <div class="r-side">
          <div class="row align-items-center">
            <div class="col-8">
              <form action="contact.php" class="form" method="post">
                <div class="form-group">
                  <label>{{ rtl ? 'ترتيب حسب' : 'Sort by' }}</label>
                  <select class="form-select">
                    <option value="" selected>{{ rtl ? 'الطبيعى' : 'Default' }}</option>
                    <option value="">{{ rtl ? 'الأكثر مبيعًا' : 'best seller' }}</option>
                    <option value="">{{ rtl ? 'منتجات جديدة' : 'new products' }}</option>
                    <option value="">{{ rtl ? 'الطبيعى' : 'Default' }}</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-4">
              <div class="grid-list-btns">
                <span class="grid-btn bttn active" @click="hideListView">
                  <i class="bi bi-grid-3x3"></i>
                </span>
                <span class="list-btn bttn" @click="showListView">
                  <i class="bi bi-list-task"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl'],
  methods: {
    hideListView() {
      document.querySelector('.grid-btn.bttn').classList.add('active');
      document.querySelector('.list-btn.bttn').classList.remove('active');
      this.$emit('setlistview', false)
    },
    showListView() {
      document.querySelector('.list-btn.bttn').classList.add('active');
      document.querySelector('.grid-btn.bttn').classList.remove('active');
      this.$emit('setlistview', true)
    }
  }
}
</script>
