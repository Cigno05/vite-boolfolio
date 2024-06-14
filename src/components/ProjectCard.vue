<template>
    <div class="card my-4">
        <div class="card-body">
            <h1 class="card-title mb-4">{{ title }}</h1>
            <p class="card-text">Created: {{ date }}</p>
            <p class="card-text">Project Type: {{ type ?? '' }}</p>
            <RouterLink :to="{ name: 'project', params: { slug: slug } }">Project Info</RouterLink>
            <p>
            <ul class="card-text p-0 d-flex flex-row gap-2 flex-wrap justify-content-center mt-3">
                <li v-for="technology in techs" :key="technology.id" class="text-uppercase">{{ technology.name }} </li>
            </ul>
            </p>

        </div>
    </div>
</template>

<script>
import { store } from '../store.js'

export default {
    props: {
        title: String,
        date: String,
        type: [String, null],
        techs: Array,
        slug: String,


        // project: Object,

    },



}
</script>

<style lang="scss" scoped>
@use '../scss/app.scss';
</style>