import CreatePlan from '@/views/newPlan/index.vue';
import Home from '@/views/home.vue';
import Login from '@/views/login.vue';
import PlanList from '@/views/planList/index.vue';

export default [
  {
    path: '/',
    component: CreatePlan,
    name: 'plan',
    meta: {
      title: '新建计划',
    },
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
    name:'live',       
    meta: {
      title:'直播首页',
    }
  },
  {
    path: '/plan-list',
    component: PlanList,
    name:'planList', 
    meta: {
      title: '计划管理',
    }
  }
];