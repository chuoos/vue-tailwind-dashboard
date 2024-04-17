import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../pages/master/dashboard.vue'

import home from '../pages/home.vue'
import profile from '../pages/profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
        {
          name: 'Home',
          path: '/home',
          component: home
        }, {
          name: 'Profile',
          path: '/profile',
          component: profile
        },
      ],
    },
  ]
})

export default router
