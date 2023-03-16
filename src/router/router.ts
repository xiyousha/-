import { createRouter, createWebHashHistory  } from 'vue-router'

import login from '../views/login/index.vue'
import goods from '../views/goods/index.vue'
import Home from '../views/index.vue'

const routes = [
  {
    name: 'login',
    path: '/',
    component: login
  },
  {
    name: 'goods',
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/goods',
        component: goods
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router