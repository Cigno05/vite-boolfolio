<script>

export default {
  components: {
  },
  data() {
    return {
    }
  }
}

</script>

<template>

  <header>

    <nav class="navbar navbar-expand-md bg-dark fixed-top shadow-sm header-nav navbar-dark">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="">
          <div class="logo_laravel">
            <img src="/public/img/swan.png" alt="">
          </div>

        </a>
        <div class="d-flex gap-3">
          <RouterLink to="/"><span class="nav-link">Home</span></RouterLink>
          <RouterLink to="/portfolio"><span class="nav-link">Portfolio</span></RouterLink>
        </div>
        <RouterLink to="/contact"><span class="nav-link">Contact</span></RouterLink>
      </div>

    </nav>

  </header>

</template>

<style></style>