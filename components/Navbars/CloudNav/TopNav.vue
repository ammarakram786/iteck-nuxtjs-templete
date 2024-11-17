<template>
  <div class="top-navbar style-9">
    <div class="container">
      <div class="row justify-content-between align-items-center gx-0">
        <div class="col-7">
          <div class="top_info">
            <a href="#" class="me-4">
              <i class="fas fa-envelope-open me-1"></i>
              <span>info@iteck-tech</span>
            </a>
            <a href="#">
              <i class="fas fa-phone me-1"></i>
              <span>+89 (000) 786 999</span>
            </a>
          </div>
        </div>
        <div class="col-5">
          <div class="side_links d-flex justify-content-lg-end">
            <a href="#" class="me-4"> Careers </a>
            <a href="#" class="me-4"> Faq </a>
            <div class="dropdown border-1 border-start ps-4" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
              <a class="dropdown-toggle fw-bold" href="#" id="navbarDropdown1" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                English
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><a class="dropdown-item" href="#0"> Arabic </a></li>
                <li><a class="dropdown-item" href="#0"> french </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleMouseMove(event) {
      const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
      const dropDownMenu = dropDownToggler?.nextElementSibling;

      dropDownToggler?.classList?.add('show');
      dropDownMenu?.classList?.add('show');
    },
    handleMouseLeave(event) {
      const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
      const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
      const dropDownMenu = dropdown.querySelector('.dropdown-menu');

      dropDownToggler?.classList?.remove('show');
      dropDownMenu?.classList?.remove('show');
    }
  }
}
</script>
