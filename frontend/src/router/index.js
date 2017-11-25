import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import List from '@/components/List';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      props: true,
    },
  ],
});
