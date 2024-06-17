<template>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-auto">
                <div class="card">
                    <img :src="`${store.project.thumb_url}`" alt="" class="card-img-top card-img-show">
                    <div class="card-body">
                        <h2 class="card-title">{{ store.project.title }}</h2>
                        <h5>Created: {{ store.project.creation_date }}</h5>
                        <h5>Technologies used: <br>
                            <ul class="card-text p-0 d-flex flex-row gap-2 flex-wrap justify-content-center mt-3">
                                <li v-for="technology in store.project.technologies" :key="technology.id"><img
                                        :src="`/public/img/${technology.name}.png`"></li>
                            </ul>
                        </h5>
                        <div class="github-link d-flex flex-row justify-content-around mt-3">
                            <h5><a :href="`${store.project.link}/${store.project.slug}`">Project Github
                                    <font-awesome-icon :icon="['fab', 'github']" /></a></h5>
                            <h5><a :href="`${store.project.link}`">My Github <font-awesome-icon
                                        :icon="['fab', 'github']" /></a></h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'
import { store } from '../store'

export default {
    components: {
        ProjectCard,
    },

    data() {
        return {
            store,

        }
    },
    methods: {
        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`, {

            })
                .then(res => {
                    console.log(res.data.result, 'progetti')
                    console.log(this.store);
                    this.store.project = res.data.result



                })
        },
    },
    mounted() {
        this.fetchProject()
        // console.log(this.$route.params.slug);
    },
}
</script>

<style lang="scss" scoped></style>