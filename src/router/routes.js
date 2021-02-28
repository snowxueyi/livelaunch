import CreatePlan from '@/views/newPlan/index.vue';
import Home from '@/views/home.vue';
import Login from '@/views/login.vue';

export default [
  {
    path: '/',
    component: CreatePlan,
    name: 'plan'
  },
  {
    path: '/login',
    meta: {
      title: '登陆',
    },
    component: Login,
  },
  {
    path: '/live',
    component: Home,
    name:'live'
  }
];