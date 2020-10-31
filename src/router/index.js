import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Main.vue';
import TodoForm from '../components/TodoForm/TodoForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodoForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
