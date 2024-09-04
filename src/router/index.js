import { createRouter, createWebHistory } from 'vue-router'
import ButtonView from '../views/ButtonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/button',
      name: 'button',
      component: ButtonView
    },
    {
      path: '/icon',
      name: 'icon',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IconView.vue')
    },
    {
      path: '/card',
      name: 'card',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardView.vue')
    },
    {
      path: '/collapse',
      name: 'collapse',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CollapseView.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DialogView.vue')
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DropdownView.vue')
    },
    {
      path: '/pager',
      name: 'pager',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PagerView.vue')
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TooltipView.vue')
    }
  ],
  linkActiveClass:'active',
})

export default router
