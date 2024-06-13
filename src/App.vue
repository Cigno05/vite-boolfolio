<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
// import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppContact from './pages/AppContact.vue'
import AppPortfolio from './pages/AppPortfolio.vue'


export default {
  components: {
    AppHeader,
    // AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  },
}

</script>

<template>

  
  <!-- <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p> -->
  <!-- <nav class="d-flex gap-2">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/portfolio">Portfolio</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav> -->

  <AppHeader></AppHeader>
  <main>
    <RouterView />
  </main>
  <AppFooter></AppFooter>



  <!-- <div id="app">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>

  </div> -->

</template>

<style lang="scss">
@use './style/general.scss';
</style>
