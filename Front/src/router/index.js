import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../components/intro/Intro.vue'),
  },
  {
    path: '/room/:id',
    component: () => import('../components/room/[id].vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
