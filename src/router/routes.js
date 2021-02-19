import CreatePlan from '@/views/newPlan/index.vue';
import Home from '@/views/home.vue';

export default [
  {
    path: '/',
    component: CreatePlan,
    name: 'plan'
  },
  {
    path: '/live',
    component: Home,
    name:'live'
  }
];