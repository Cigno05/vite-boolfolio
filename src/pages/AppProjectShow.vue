<template>
    <div>
        <ul>
            <li>{{ store.project.title }}</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
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
                    // console.log(res.data.result, 'progetti')
                    this.store.project = res.data.result



                })
        },
        },
        mounted () {
            this.fetchProject()
            // console.log(this.$route.params.slug);
        },
    }
</script>

<style lang="scss" scoped>

</style>