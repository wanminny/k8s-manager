import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // 所有path 添加mng前缀;
  history: createWebHistory(import.meta.env.BASE_URL+ 'mng'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/main', //视图
      component: () => import('../views/AboutView.vue'),
      icon: "odometer", //图标
      meta: {title:"概要", requireAuth: false}, //定义meta元数据
    },
    {
      path: '/404',
      component: () => import('../views/NotView.vue'),
      meta: {title:"404",requiredAuth:true},
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404',
    },
  ],
})
// 路由守卫
router.beforeEach((to, from) => {

});


export default router
