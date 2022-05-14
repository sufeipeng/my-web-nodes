import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'home',
  component: () => import('@/view/home/Index.vue')
},
{
  path: '/details',
  name: 'details',
  component: () => import('@/view/details/Index.vue')
}
];

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes
});

export default router;