import Router from 'vue-router';
import IndexPage from '../views/IndexPage.vue';
import AuthPage from '../views/AuthPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: AuthPage,
    },
  ],
});
