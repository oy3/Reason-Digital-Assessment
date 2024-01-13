import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LearnView from '../views/LearnView.vue';
import DigitalDivideView from '../views/DigitalDivideView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/learn',
      name: 'learn',
      component: LearnView,
    },
    {
      path: '/divide',
      name: 'divide',
      component: DigitalDivideView,
    }
  ]
})

export default router
