<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import axios from 'axios'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  },

  methods: {
    changePage(n) {
      if(n === this.currentPage) return
      this.currentPage = n
      this.fetchProjects()
    },
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects',{
        	params: {
            page: this.currentPage,
          }
      })
      .then(res => {
        // console.log(this.store.projects, 'progetti')
        this.store.projects = res.data.result.data
        // console.log(this.store.projects, 'progetti dopo')

        
      })
    }
  },
  created () {
    this.fetchProjects();
  },
}

</script>

<template>

  <div id="app">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss">
@use './style/general.scss';

</style>
