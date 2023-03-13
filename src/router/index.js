// Composables
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../pages/MainPage";

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/photo',
    component: () => import('../pages/PhotosPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
