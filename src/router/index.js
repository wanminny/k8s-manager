import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  // 所有path 添加mng前缀;
  history: createWebHistory(import.meta.env.BASE_URL+ 'mng'),
  routes: [
    {
        path: '/404',
        component: () => import('@/views/common/404.vue'),
        meta: {title:"404" ,requireAuth:false}
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '404'
    },
    {
      path: '/',
      name: 'home',
      redirect: "/index",//重定向 进来就自动默认到index路径
    },
    {
      path: '/login',  //url路径
      component: () => import('@/views/page/login/login.vue'),  //视图组件
      icon: "odometer",  //图标
      meta: {title: "登录", requireAuth: false},  //meta元信息
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/layout/LayOut.vue'),
      //嵌套路由/子路由
      children: [
        {
          path: "/role",
          name: "role",
          component: () => import('../views/page/role/role.vue'),
        }, {
          path: "/user",
          name: "user",
          component: () => import('../views/page/user/user.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/page/about/about.vue')
        }
      ]
    },
  ]
})

export default router
