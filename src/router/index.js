import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  // 所有path 添加mng前缀;
  history: createWebHistory(import.meta.env.BASE_URL+ 'mng'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/HomePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: ()=> import('@/views/page/about.vue')
    }
  ]
})

export default router
