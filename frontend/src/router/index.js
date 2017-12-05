import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import List from '@/components/List';
import Profile from '@/components/Profile';
import Posts from '@/components/Posts';
import Best from '@/components/Best';

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
      children: [
        {
          path: '/list/profile',
          name: 'Profile',
          component: Profile,
        },
        {
          path: '/list/posts',
          name: 'Posts',
          component: Posts,
        },
        {
          path: '/list/best',
          name: 'Best',
          component: Best,
        },
      ],
    },

  ],
});
