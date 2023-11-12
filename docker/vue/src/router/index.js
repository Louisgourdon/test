import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClockView from "../views/ClockView.vue"
import ChartView from "../views/ChartView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:"/clock",
      component: ClockView
    },
    {
      path:"/chart", 
      name:"Chart Manager",
      component: ChartView
    }
  ]
})

export default router
