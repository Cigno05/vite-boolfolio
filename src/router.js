import { createWebHistory, createRouter } from 'vue-router'



// Import delle Pagine dell'Applicativo
import AppHome from './pages/AppHome.vue'
import AppContact from './pages/AppContact.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppPage404 from './pages/AppPage404.vue'
import AppProjectShow from './pages/AppProjectShow.vue'


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
    
    {
        path: '/portfolio/:slug', name:'project', component: AppProjectShow
    },
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: AppPage404
    },
    
        


]



const router = createRouter({

    history: createWebHistory(),

    routes: routes,

})


export default router