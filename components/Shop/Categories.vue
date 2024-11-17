<template>
  <div class="filter-card mb-30">
    <div class="card-title">
      <span>{{ rtl ? 'التصنيفات' : 'Categories' }}</span>
    </div>
    <div class="form-check category-checkRadio">
      <input class="form-check-input" type="radio" name="category" id="category1" />
      <label class="form-check-label cat-link" for="category1">
        {{ rtl ? 'كل التصنيفات' : 'All Categories' }}
      </label>
    </div>
    <div class="form-check category-checkRadio">
      <input class="form-check-input" type="radio" name="category" id="category2" />
      <label class="form-check-label cat-link" for="category2">
        {{ rtl ? 'التسويق و التحليل' : 'Marketing & SEO' }}
      </label>
    </div>
    <div class="accordion" id="accordionExample">
      <div class="">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true"
            aria-controls="collapseOne">
            {{ rtl ? 'تكنولوجى' : 'Technology' }}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show"
          aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="ps-3 mb-10">
            <div class="form-check category-checkRadio">
              <input class="form-check-input" type="radio" name="category"
                id="category3" checked />
              <label class="form-check-label cat-link" for="category3">
                {{ rtl ? 'كمبيوتر ولابتوب' : 'PC & Laptop' }}
              </label>
            </div>
            <div class="form-check category-checkRadio">
              <input class="form-check-input" type="radio" name="category"
                id="category4" />
              <label class="form-check-label cat-link" for="category4">
                {{ rtl ? 'قطع غيار' : 'Hardware' }}
              </label>
            </div>
            <div class="form-check category-checkRadio">
              <input class="form-check-input" type="radio" name="category"
                id="category5" />
              <label class="form-check-label cat-link" for="category5">
                {{ rtl ? 'موبايل وتابلت' : 'mobile & tablet' }}
              </label>
            </div>
            <div class="form-check category-checkRadio">
              <input class="form-check-input" type="radio" name="category"
                id="category6" />
              <label class="form-check-label cat-link" for="category6">
                {{ rtl ? 'اكسسوارات' : 'accessories' }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            {{ rtl ? 'الكترونيات' : 'Electronic' }}
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse"
          aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="ps-3 mb-10">
            <div class="form-check category-checkRadio">
              <input class="form-check-input" type="radio" name="category"
                id="category7" />
              <label class="form-check-label cat-link" for="category7">
                {{ rtl ? 'كمبيوتر ولابتوب' : 'PC & Laptop' }}
              </label>
            </div>
            <div class="form-check category-checkRadio">
              <input class="form-check-input" type="radio" name="category"
                id="category8" />
              <label class="form-check-label cat-link" for="category8">
                {{ rtl ? 'قطع غيار' : 'Hardware' }}
              </label>
            </div>
            <div class="form-check category-checkRadio">
              <input class="form-check-input" type="radio" name="category"
                id="category9" />
              <label class="form-check-label cat-link" for="category9">
                {{ rtl ? 'موبايل وتابلت' : 'mobile & tablet' }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapseThree"
            aria-expanded="false" aria-controls="collapseThree">
            {{ rtl ? 'تكنولوجى' : 'Course' }}
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse"
          aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="ps-3 mb-10">
            <div class="form-check category-checkRadio">
              <input class="form-check-input" type="radio" name="category"
                id="category10" />
              <label class="form-check-label cat-link" for="category10">
                {{ rtl ? 'كمبيوتر ولابتوب' : 'PC & Laptop' }}
              </label>
            </div>
            <div class="form-check category-checkRadio">
              <input class="form-check-input" type="radio" name="category"
                id="category11" />
              <label class="form-check-label cat-link" for="category11">
                {{ rtl ? 'قطع غيار' : 'Hardware' }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-check category-checkRadio">
      <input class="form-check-input" type="radio" name="category" id="category12" />
      <label class="form-check-label cat-link" for="category12">
        {{ rtl ? 'احداث' : 'Event' }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rtl']
}
</script>
