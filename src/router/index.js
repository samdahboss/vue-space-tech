import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '@/views/DestinationView.vue'
import CrewView from '@/views/CrewView.vue'
import TechnologyView from '@/views/TechnologyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination',
      name: 'destination',
      // route level code-splitting
      // this generates a separate chunk (destination.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DestinationView,
    },
    {
      path: '/crew',
      name: 'crew',
      component: CrewView,
    },
    {
      path: '/tech',
      name: 'technology',
      component: TechnologyView,
    },
  ],
})

export default router
