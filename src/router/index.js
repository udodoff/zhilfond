import Employee from '@/pages/Employee.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/employee/:id',
    name: 'employee',
    component: Employee
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
