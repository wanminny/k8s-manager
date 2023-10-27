import { createRouter, createWebHistory } from 'vue-router'
// import Layout from '../view/layout/lay-out.vue';

// import {
//   Home,
// } from '@/page';

// const pages = import.meta.glob('../view/page/**/*.vue');
// const routes = Object.keys(pages).map((path)=>{
//     let name = path.match(/\/page(.*)\.vue$/)[1].toLowerCase();
//     console.log(1,name)
//     // if(name.substring(name.length - 3) == 'mng'){
//     //     name = name.slice(0, -5);//去掉最后的index
//     //     console.log(2,name)
//     // } 
//     return {
//         path: name === '/mng/home' ? '/': name,
//         component: pages[path]
//     }
// })

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
