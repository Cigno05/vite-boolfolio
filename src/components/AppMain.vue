<script>
import { store } from '../store.js'
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'

export default {
  components: {
    ProjectCard,
  },

  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects', {
        params: {
          page: store.currentPage,
        }
      })
        .then(res => {
          // console.log(this.store.projects, 'progetti')
          this.store.projects = res.data.result.data

          // console.log(res.data.result.last_page , 'ultima')
          this.store.lastPage = res.data.result.last_page


        })
    },

    changePage(n) {
      if (n === store.currentPage) return
      store.currentPage = n
      this.fetchProjects()
    },

    

  },
  created() {

    this.fetchProjects();
  },
  data() {
    return {
      store,
    }
  },
}

</script>

<template>

  <main>
    <div class="container">
      <div class="row mb-3">
        <div class="col">
          <ul class="p-0 d-flex flex-row gap-2 justify-content-center">
            <li :class="number === store.currentPage ? 'text-danger fw-bold' : ''" @click="changePage(number)"
              v-for="number in store.lastPage" :key="number" class="">
              {{ number }}
            </li>
          </ul>
          
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 card-group" v-for="project in store.projects" :key="project.id">

          <ProjectCard :title="project.title" :date="project.creation_date" :type="project.type?.name"
            :techs="project.technologies"></ProjectCard>

          <!-- <ProjectCard
          :project="project"
          ></ProjectCard> -->
        </div>
      </div>
    </div>



  </main>

</template>

<style></style>