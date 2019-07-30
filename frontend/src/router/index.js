import Router from 'vue-router';

const IndexPage = () => import(/* webpackChunkName: "indexPage" */ '../views/IndexPage.vue');
const AuthPage = () => import(/* webpackChunkName: "authPage" */ '../views/AuthPage.vue');

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
