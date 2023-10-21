import { createRouter, createWebHistory } from 'vue-router'
// import Layout from '../view/layout/lay-out.vue';

// import {
//   Home,
// } from '@/page';

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
    },
    // {
    //   path: '/',
    //   redirect: '/index',
    // },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: Layout,
    //   children: [
    //     {
    //       path: '/role',
    //       name: 'role',
    //       component: () => import('@/view/page/role/role.vue')
    //     },
    //     {
    //       path: '/user',
    //       name: 'user',
    //       component: () => import('@/view/page/user/user.vue')
    //     },
    //   ],
    // }, 
  ],
})

export default router
