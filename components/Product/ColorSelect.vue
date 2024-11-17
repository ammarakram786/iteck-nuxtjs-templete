<template>
  <div class="select-color">
    <span class="me-4 mb-1 color-000 fw-bold fs-14px">{{ rtl ? 'إختر لون' : 'Select Color' }}</span>
    <div class="colors-content">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="colorSelect"
          id="colorSelect1" checked />
        <label class="form-check-label" for="colorSelect1">
          <span class="color-circle gray"></span>
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="colorSelect"
          id="colorSelect2" />
        <label class="form-check-label" for="colorSelect2">
          <span class="color-circle black"></span>
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="colorSelect"
          id="colorSelect3" />
        <label class="form-check-label" for="colorSelect3">
          <span class="color-circle blue"></span>
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="colorSelect"
          id="colorSelect4" />
        <label class="form-check-label" for="colorSelect4">
          <span class="color-circle green"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl']
}
</script>
