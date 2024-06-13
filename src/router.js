import { createMemoryHistory, createRouter } from 'vue-router'



// Import delle Pagine dell'Applicativo
import AppHome from './pages/AppHome.vue'
import AppContact from './pages/AppContact.vue'
import AppPortfolio from './pages/AppPortfolio.vue'


const routes = [

    { 
        path: '/', name:'home', component:AppHome 
    },

    { 
        path: '/contact', name:'contact', component: AppContact 
    },

    {
        path: '/portfolio', name:'portfolio', component: AppPortfolio 
    },


]



const router = createRouter({

    history: createMemoryHistory(),

    routes: routes,

})


export default router