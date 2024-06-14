<script>
import { store } from '../store.js'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'

export default {
    components: {
        ProjectCard,
    },

    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: store.currentPage,
                    perPage: store.perPage
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

        changePerPage() {
            store.perPage = store.choice
            this.fetchProjects()
        }

    },
    created() {

        this.fetchProjects();
        console.log(store.perPage)
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
            <div class="row">
                <div class="col d-flex gap-3 justify-content-between align-items-center">
                    <div>
                        <ul class="p-0 m-0 d-flex flex-row gap-2 align-items-center flex-wrap list-page">
                            <li :class="number === store.currentPage ? 'current-page' : ''"
                                @click="changePage(number)" v-for="number in store.lastPage" :key="number" class="">
                                {{ number }}
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex gap-3 w-50 align-items-center justify-content-end">
                        <p class="m-0">Projects for page:</p>
                        <select @change="changePerPage()" v-model="store.choice" class="form-select select-page py-0 "
                            aria-label="Default select example">
                            <option selcted>12</option>
                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="9">9</option>
                            <option value="12">12</option>
                            <option value="15">15</option>
                            <option value="18">18</option>
                        </select>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4 card-group" v-for="project in store.projects" :key="project.id">

                    <ProjectCard :title="project.title" :date="project.creation_date" :type="project.type?.name"
                        :techs="project.technologies" :slug="project.slug"></ProjectCard>

                    <!-- <ProjectCard
          :project="project"
          ></ProjectCard> -->

                </div>
            </div>
        </div>



    </main>

</template>

<style></style>