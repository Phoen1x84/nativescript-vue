import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Login from '../components/Login';
import MakeAClaim from '../components/MakeAClaim';
import MyClaims from '../components/MyClaims';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Login,
      meta: {
        title: 'Sign in'
      }
    },
    {
      path: '/makeClaim',
      component: MakeAClaim,
      meta: {
        title: 'Making your claim'
      }
    },
    {
      path: '/claims',
      component: MyClaims,
      meta: {
        title: 'Claims'
      }
    },
    // {
    //   path: '/home',
    //   component: Home,
    //   meta: {
    //     title: 'Home',
    //   },
    // },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
