<template>
  <div class="filter-card">
    <div class="card-title d-flex justify-content-between">
      <span>{{ rtl ? 'فلتر' : 'Filter' }}</span>
      <a href="#" class="text-uppercase fw-normal fs-10px"> <i
        class="bi bi-arrow-repeat me-1"></i> {{ rtl ? 'إعادة ضبط الجميع' : 'Reset All' }} </a>
    </div>
    <div class="filter-card-item">
      <div class="sub-tilte d-flex align-items-center justify-content-between">
        <span>{{ rtl ? 'العلامات التجارية' : 'Brands' }}</span>
        <small class="icon">
          <i class="bi bi-chevron-down"></i>
        </small>
      </div>
      <div class="filter-card-body">
        <div class="search-group">
          <input type="text" placeholder="Search brand" />
          <button> <i class="bi bi-search"></i> </button>
        </div>
        <div class="filter-card-scroll">
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck1" />
            <label class="form-check-label" for="categoryCheck1">
              {{ rtl ? 'جميع العلامات التجارية' : 'All Brands' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck2" />
            <label class="form-check-label" for="categoryCheck2">
              {{ rtl ? 'ابل' : 'Apple' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck3" />
            <label class="form-check-label" for="categoryCheck3">
              {{ rtl ? 'سامسونج' : 'Samsung' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck4" />
            <label class="form-check-label" for="categoryCheck4">
              {{ rtl ? 'اوبو' : 'Oppo' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck5" />
            <label class="form-check-label" for="categoryCheck5">
              {{ rtl ? 'سونى' : 'Sony' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck6" />
            <label class="form-check-label" for="categoryCheck6">
              {{ rtl ? 'ابل' : 'Apple' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck7" />
            <label class="form-check-label" for="categoryCheck7">
              {{ rtl ? 'سامسونج' : 'Samsung' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck8" />
            <label class="form-check-label" for="categoryCheck8">
              {{ rtl ? 'اوبو' : 'Oppo' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck9" />
            <label class="form-check-label" for="categoryCheck9">
              {{ rtl ? 'سونى' : 'Sony' }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="filter-card-item">
      <div class="sub-tilte d-flex align-items-center justify-content-between">
        <span>{{ rtl ? 'الالوان' : 'Colors' }}</span>
        <small class="icon">
          <i class="bi bi-chevron-down"></i>
        </small>
      </div>
      <div class="filter-card-body">
        <div class="filter-card-scroll">
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck10" />
            <label class="form-check-label" for="categoryCheck10">
              {{ rtl ? 'كل الالوان' : 'All Colors' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck11" />
            <label class="form-check-label" for="categoryCheck11">
              {{ rtl ? 'احمر' : 'Red' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck12" />
            <label class="form-check-label" for="categoryCheck12">
              {{ rtl ? 'برتقالى' : 'Orange' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck13" />
            <label class="form-check-label" for="categoryCheck13">
              {{ rtl ? 'اصفر' : 'Yellow' }}
            </label>
          </div>
          <div class="form-check category-checkBox">
            <input class="form-check-input" type="checkbox" value=""
              id="categoryCheck14" />
            <label class="form-check-label" for="categoryCheck14">
              {{ rtl ? 'ازرق' : 'Blue' }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="filter-card-item border-0 m-0">
      <div class="sub-tilte d-flex align-items-center justify-content-between">
        <span>{{ rtl ? 'السعر' : 'Price' }}</span>
      </div>
      <div class="filter-card-body">
        <div class="slider-range-content">
          <div class="amount-input">
            <div class="amount">
              <small>$ {{ rtl ? 'الاقل' : 'Min' }}</small>
              <input type="text" id="amount1" readOnly v-model="range[0]" />
            </div>
            <div class="amount">
              <small>$ {{ rtl ? 'الاغلى' : 'Max' }}</small>
              <input type="text" id="amount2" readOnly v-model="range[1]" />
            </div>
            <button>{{ rtl ? 'تطبيق' : 'go' }}</button>
          </div>
          <div id="slider-range" :style="`margin-top:25px; --clr-style: var(--color-blue${styleType})`">
            <client-only>
              <vue-range-slider
                :min="0"
                :max="500"
                :value="range"
                :bgStyle="{ backgroundColor: '#dfdfdf', height: '6px' }"
                :sliderStyle="{ backgroundColor: `var(--color-blue${styleType})`, boxShadow: 'none' }"
                :processStyle="{ backgroundColor: `var(--color-blue${styleType})`, boxShadow: 'none' }"
                :tooltipStyle="{ display: 'none' }"
                @slide-end="changeRangeValue"
              />
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'

export default {
  props: ['rtl', 'styleType'],
  data() {
    return {
      range: [75, 300]
    }
  },
  methods: {
    changeRangeValue(value) {
      this.range = value;
    }
  }
}
</script>
