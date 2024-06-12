<script>
import { store } from '../store.js'

export default {
  components: {
  },
  created() {
    // console.log(store.projects[0].technologies);
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>

  <main>
    <div class="container">
      <div class="row">

        <div class="col-4 card-group" v-for="project in store.projects" :key="project.id">
            <div class="card my-3">
              <div class="card-body">
                <h1 class="card-title mb-4">{{ project.title }}</h1>
                <p class="card-text">Created: {{ project.creation_date }}</p>
                <p class="card-text">Project Type: {{ project.type?.name }}</p>
                <p class="card-text" >Technologies used: <span v-for="technology in project.technologies" :key="technology.id">{{ technology.name }} </span></p> <!-- mettere lo spazio -->
              </div>
            </div>
        </div>
      </div>
    </div>



  </main>

</template>

<style></style>