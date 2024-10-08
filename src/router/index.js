import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;