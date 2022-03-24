import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Accueil from '../components/Rick/Accueil.vue'
import Personnage from '../components/Rick/Personnage.vue'
import Erreur from '../components/Rick/Erreur.vue'
import Location from '../components/Rick/Location.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'accueil', component: Accueil },
        { path: '/personnage/:page', name: 'personnage', component: Personnage, props:true },
        { path: '/location/:id', name: 'location', component: Location, props:true },
        { path: '/404', name: 'erreur', component: Erreur },
        { path: '/:catchAll(.*)', redirect:'/404'},
    ]
    
})

export default router