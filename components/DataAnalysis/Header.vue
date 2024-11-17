<template>
  <header class="style-8 bg-gray2">
    <Navbar />
    <div class="container">
      <div class="content section-padding">
        <div class="row align-items-center gx-0">
          <div class="col-lg-6">
            <div class="info">
              <p class="fw-bold color-main text-decoration-underline text-uppercase wow fadeInUp"> We Bring Ideas To Life </p>
              <h1 class="wow fadeInUp"> Ai & Data Machine <br /> Deep Solutions. </h1>
              <div class="form wow fadeInUp">
                <h5> Subscribe & Get 7-Days Trail </h5>
                <div class="form-group mt-4">
                  <span class="icon flex-shrink-0 ms-3">
                    <i class="fas fa-envelope-open"></i>
                  </span>
                  <input type="text" class="form-control" placeholder="Business email address" />
                  <button class="butn bg-orange1 border-0 rounded-pill hover-shadow flex-shrink-0" type="submit">
                    <span class="text-white"> Get A Demo <i class="fal fa-long-arrow-right ms-2"></i> </span>
                  </button>
                </div>
              </div>
              <p class="text-center color-999 mt-3"> *** We are not going to save your data </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img mt-4 mt-lg-0 wow fadeIn">
              <img src="/assets/img/header/3d_vector_head8.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '../Navbars/DataAnalysis';

export default {
  components: {
    Navbar
  }
}
</script>
