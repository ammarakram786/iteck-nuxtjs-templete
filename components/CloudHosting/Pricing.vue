<template>
  <section class="pricing style-9 section-padding bg-gray2">
      <div class="container">
        <div class="section-head text-center style-9 mb-80 wow fadeInUp">
          <h6> best plans </h6>
          <h2> Hosting Plans Include </h2>
          <p> Free to focus on growing your business, let us handle your site </p>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-lg-4" v-for="(plan, index) in plans" :key="index">
              <div class="pricing-card wow fadeInUp">
                <div class="card-head">
                  <h5> {{ plan.title }} </h5>
                  <p> {{ plan.description }} </p>
                </div>
                <div class="pricing-cont">
                  <h2 class="price"> ${{ plan.price }} <small> /mo </small> </h2>
                  <p class="hightLight"> {{ plan.highlight }} </p>
                  <p class="color-999"> {{ plan.text }} </p>
                  <a href="#" class="butn border-2 border-darkBlue2 border rounded-3 color-darkBlue2 fw-bold mt-30 w-100 mb-20">
                    <span> Purchase Plan </span>
                  </a>
                  <ul>
                    <li v-for="(feature, i) in plan.features" :key="i"> 
                      <p><strong class="color-darkBlue2"> {{ feature.value }} </strong> {{ feature.title }} </p> 
                      <span class="icon"> <i class="fal fa-check"></i> </span> 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h5 class="offer-text wow fadeInDown"> In addition to Windows Web Hosting plans, we offer <a href="#"> Linux Plans </a> </h5>
        </div>
      </div>
    </section>
</template>

<script>
import plans from '../../data/CloudHosting/plans.json';
export default {
  data() {
    return {
      plans
    }
  },
}
</script>
